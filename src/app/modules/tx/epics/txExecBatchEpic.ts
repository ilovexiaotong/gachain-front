// Copyright 2017 The gachain-front Authors
// This file is part of the gachain-front library.
// 
// The gachain-front library is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// The gachain-front library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Lesser General Public License for more details.
// 
// You should have received a copy of the GNU Lesser General Public License
// along with the gachain-front library. If not, see <http://www.gnu.org/licenses/>.

import { Epic } from 'modules';
import { txExecBatch, txBatchStatus } from '../actions';
import { Observable } from 'rxjs/Observable';
import keyring from 'lib/keyring';
import { ITxStatusResponse } from 'gachain/api';
import { ITransaction } from 'gachain/tx';

const BATCH_COOLDOWN_TIMER = 3000;
const BATCH_COUNT = 10;
const BATCH_CONCURRENCY = 1;

interface IBatchExecStatus {
    index: number;
    data: ITxStatusResponse[];
}

const txExecBatchEpic: Epic = (action$, store, { api }) => action$.ofAction(txExecBatch.started)
    .flatMap(action => {
        const state = store.getState();
        const client = api(state.auth.session);

        const fullStatus: { contract: string, pending: number, results: ITxStatusResponse[] }[] = action.payload.contracts.map(contract => ({
            contract: contract.name,
            pending: contract.data.length,
            results: []
        }));

        return Observable.from(action.payload.contracts)
            .flatMap((batch, index) => {
                return Observable.from(batch.data).bufferCount(BATCH_COUNT).flatMap(params => {
                    return Observable.from(client.txPrepareBatch({
                        name: batch.name,
                        data: params

                    })).flatMap(prepare =>
                        client.txCallBatch({
                            requestID: prepare.request_id,
                            time: prepare.time,
                            pubkey: keyring.generatePublicKey(state.auth.privateKey, true),
                            signatures: prepare.forsign.map(forsign =>
                                keyring.sign(forsign, state.auth.privateKey)
                            )
                        })

                    ).catch(prepareError => Observable.throw({
                        tx: {
                            uuid: action.payload.uuid,
                            name: batch.name,
                            silent: action.payload.silent,
                            params: batch.data[index],
                        },
                        error: {
                            type: prepareError.error,
                            error: prepareError.msg
                        }

                    })).flatMap(tx => {
                        const notifier: Observable<IBatchExecStatus> = Observable.defer(() => (
                            client.txStatusBatch({
                                hashes: tx.hashes
                            })

                        )).flatMap(status => {
                            const results: ITxStatusResponse[] = [];
                            let pending = 0;

                            for (let itr in status.results) {
                                if (status.results.hasOwnProperty(itr)) {
                                    const result = status.results[itr];
                                    if (result.errmsg) {
                                        throw result.errmsg;
                                    }
                                    else if (!result.blockid) {
                                        pending++;
                                    }
                                    else {
                                        results.push(result);
                                    }
                                }
                            }

                            if (pending) {
                                return Observable.timer(BATCH_COOLDOWN_TIMER).flatMap(() =>
                                    notifier
                                );
                            }
                            else {
                                return Observable.of({
                                    index,
                                    status: 'DONE',
                                    data: results
                                });
                            }
                        });

                        return notifier.catch(childError => Observable.throw({
                            tx: {
                                uuid: action.payload.uuid,
                                name: batch.name,
                                silent: action.payload.silent,
                                params: batch.data[index],
                            },
                            error: {
                                type: childError.type,
                                error: childError.error
                            }
                        }));
                    });
                });

            }, BATCH_CONCURRENCY).map((status: IBatchExecStatus) => {
                fullStatus[status.index].pending -= status.data.length;
                fullStatus[status.index].results = status.data;

                const totalPending = fullStatus.map(v => v.pending).reduce((a, b) => a + b);
                const results = fullStatus.map(v =>
                    v.results.map(r => ({
                        type: 'single',
                        uuid: action.payload.uuid,
                        contract: v.contract,
                        block: r.blockid,
                        result: r.result,
                        error: r.errmsg

                    }) as ITransaction)
                ).reduce((a, b) => a.concat(b));

                if (totalPending) {
                    return txBatchStatus({
                        id: action.payload.uuid,
                        pending: totalPending
                    });
                }
                else {
                    return txExecBatch.done({
                        params: action.payload,
                        result: results
                    });
                }

            }).catch(e => Observable.of(txExecBatch.failed({
                params: action.payload,
                error: e
            })));
    });

export default txExecBatchEpic;