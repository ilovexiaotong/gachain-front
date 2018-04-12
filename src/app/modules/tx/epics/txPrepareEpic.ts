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
import { Observable } from 'rxjs';
import keyring from 'lib/keyring';
import { txExec, txPrepare } from '../actions';
import ModalObservable from 'modules/modal/util/ModalObservable';

const txPrepareEpic: Epic = (action$, store, { api }) => action$.ofAction(txPrepare)
    .flatMap(action => {
        const state = store.getState();
        const client = api(state.engine.apiHost, state.auth.sessionToken);

        if (!keyring.validatePrivateKey(action.payload.privateKey)) {
            Observable.of(txExec.failed({
                params: action.payload,
                error: {
                    type: 'E_INVALID_PASSWORD',
                    error: null
                }
            }));
        }

        const txCall = {
            ...action.payload.tx,
            params: {
                ...action.payload.tx.params,
                Lang: state.storage.locale
            }
        };

        return Observable.fromPromise(client.txPrepare(txCall)).flatMap(prepare => {
            let forSign = prepare.forsign;
            const signParams = {};

            if (prepare.signs) {
                return ModalObservable(action$, {
                    modal: {
                        id: 'SIGNATURE',
                        type: 'TX_SIGNATURE',
                        params: {
                            txParams: txCall.params,
                            signs: prepare.signs,
                            contract: txCall.name
                        }
                    },
                    success: result => {
                        prepare.signs.forEach(sign => {
                            const childSign = keyring.sign(sign.forsign, action.payload.privateKey);
                            signParams[sign.field] = childSign;
                            forSign += `,${childSign}`;
                        });

                        return Observable.of(txExec.started({
                            tx: {
                                ...txCall,
                                params: {
                                    ...txCall.params,
                                    ...signParams
                                }
                            },
                            time: prepare.time,
                            privateKey: action.payload.privateKey,
                            signature: keyring.sign(forSign, action.payload.privateKey)
                        }));
                    },
                    failure: reason => Observable.throw({
                        error: 'E_CANCELLED'
                    })
                });
            }
            else {
                return Observable.of(txExec.started({
                    tx: txCall,
                    time: prepare.time,
                    privateKey: action.payload.privateKey,
                    signature: keyring.sign(forSign, action.payload.privateKey)
                }));
            }

        }).catch(e => Observable.of(txExec.failed({
            params: action.payload,
            error: {
                type: e.error,
                error: e.msg
            }
        })));
    });

export default txPrepareEpic;