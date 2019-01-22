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

import * as actions from './actions';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { IRecordCall, IFlowingCall, ITotalCall } from 'gachain/auth';
import recordHandler from './reducers/recordHandler';
import recordDoneHandler from './reducers/recordDoneHandler';
import recordFailedHandler from './reducers/recordFailedHandler';

import flowingHandler from './reducers/flowingHandler';
import flowingDoneHandler from './reducers/flowingDoneHandler';
import flowingFailedHandler from './reducers/flowingFailedHandler';

import totalHandler from './reducers/totalHandler';
import totalDoneHandler from './reducers/totalDoneHandler';
import totalFailedHandler from './reducers/totalFailedHandler';

export type State = {
    readonly cmd: string,
    readonly data: IRecordCall,
    readonly flowData: IFlowingCall[],
    readonly totalData: ITotalCall,
    readonly current_page: number,
    readonly page_size: number,
    readonly ret: string,
    readonly ret_data_type: string,
    readonly retcode: number,
    readonly retinfo: string,
    readonly sum: string,
    readonly total: number,
    readonly amount: string,
    readonly inamount: string,
    readonly outamount: string,
    readonly transaction: number,
    readonly ecosystem: number,
    readonly wallet: string
};

export const initialState: State = {
    cmd: null,
    data: {
        amount: '',
        blocked: null,
        deleted: null,
        ecosystem: null,
        id: '',
        maxpay: '',
        multi: null,
        publickey: '',
    },
    flowData: [{
        amount: '',
        block_id: null,
        comment: '',
        created_at: '',
        id: null,
        recipient_id: '',
        sender_id: '',
        txhash: '',
    }],
    totalData: {
        transaction: null,
        inamount: '',
        outamount: '',
        amount: ''
    },
    amount: '',
    inamount: '',
    outamount: '',
    transaction: null,
    ecosystem: null,
    wallet: '',
    current_page: null,
    page_size: null,
    ret: '',
    ret_data_type: '',
    retcode: null,
    retinfo: '',
    sum: '',
    total: null
};

export default reducerWithInitialState<State>(initialState)
    .case(actions.renderRecord.started, recordHandler)
    .case(actions.renderRecord.done, recordDoneHandler)
    .case(actions.renderRecord.failed, recordFailedHandler)

    .case(actions.renderFlowing.started, flowingHandler)
    .case(actions.renderFlowing.done, flowingDoneHandler)
    .case(actions.renderFlowing.failed, flowingFailedHandler)

    .case(actions.renderTotal.started, totalHandler)
    .case(actions.renderTotal.done, totalDoneHandler)
    .case(actions.renderTotal.failed, totalFailedHandler);