// MIT License
// 
// Copyright (c) 2016-2018 GACHAIN
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
import { Action } from 'redux';
import { Epic } from 'modules';
import { renderRecord } from '../actions';
import { Observable } from 'rxjs/Observable';

const EcosystemKeyEpic: Epic = (action$, store, { api }) => action$.ofAction(renderRecord.started)
    .flatMap(action => {
        const wallet = store.getState().auth.wallet;
        const client = api({ apiHost: 'https://explore.gac.one:8800/api/' });
        return Observable.from(client.getEcosystemKey({
                interface: 'get_ecosystem_key',
                msgtype: 'request',
                remark: '',
                version: '1.0',
                cmd: '001',
                page_size: 10,
                current_page: 1,
                ecosystem: wallet.access.ecosystem,
                wallet: wallet.wallet.id
        })) 
        .flatMap(session => {
            return Observable.of<Action>(
                renderRecord.done({
                    params: action.payload,
                    result: {
                        cmd:  session.cmd,
                        data: {
                            amount: session.amount,
                            blocked: session.blocked,
                            deleted: session.deleted,
                            ecosystem: session.ecosystem,
                            id: session.id,
                            maxpay: session.maxpay,
                            multi: session.multi,
                            publickey: session.publickey
                        }
                    }
                })
            );
        })
        .catch(e => Observable.of(
            renderRecord.failed({
                params: action.payload,
                error: e.error
            })
        ));
        });
        
export default EcosystemKeyEpic;