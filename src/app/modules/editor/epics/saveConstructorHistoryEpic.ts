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
import { Epic } from 'redux-observable';
import * as actions from '../actions';
import { IRootState } from 'modules';

const saveConstructorHistoryEpic: Epic<Action, IRootState> =
    (action$, store) => action$.ofAction(actions.saveConstructorHistory.started)
        .map(action => {
            const state = store.getState().editor;
            const tab = state.tabs[state.tabIndex].designer;
            const tabData = tab && tab.data || null;
            const tabHistory = tab && tab.history || null;

            let historyData = tabHistory && tabHistory.data || [];
            const jsonData = tabData && tabData.jsonData || [];

            const position = tabHistory && tabHistory.position || 0;

            if (position < historyData.length) {
                historyData = [...historyData.slice(0, position)];
            }

            const canUndo = position > 0;
            const canRedo = false;

            return actions.saveConstructorHistory.done({
                params: action.payload,
                result: {
                    data: historyData.concat([jsonData]),
                    position: position + 1,
                    canUndo,
                    canRedo
                }
            });
        });

export default saveConstructorHistoryEpic;