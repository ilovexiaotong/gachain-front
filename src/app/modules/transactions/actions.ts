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

import actionCreatorFactory from 'typescript-fsa';
import { IRecordCall, IFlowingCall, ISearchCall, ITotalCall } from 'gachain/auth';

const actionCreator = actionCreatorFactory('record');

export const renderRecord = actionCreator.async< void, { cmd: string, data: IRecordCall }, undefined >('RENDER_RECORD');
export const renderFlowing = actionCreator.async< ISearchCall, { cmd: string, flowData: IFlowingCall[], current_page: number, page_size: number, ret: string, ret_data_type: string, retcode: number, retinfo: string, sum: string,  total: number }, undefined >('RENDER_FLOWING');
export const renderTotal = actionCreator.async< void, { cmd: string, totalData: ITotalCall, amount: string, inamount: string, outamount: string, transaction: number, ecosystem: number, ret: string, retcode: number, retinfo: string, sum: string, wallet: string }, undefined >('RENDER_TOTAL');
