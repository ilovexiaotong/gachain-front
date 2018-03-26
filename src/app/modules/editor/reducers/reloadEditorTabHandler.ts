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

import { State } from '../reducer';
import { IReloadEditorTabCall } from 'gachain/editor';
import findTabIndex from './findTabIndex';

export default function (state: State, payload: IReloadEditorTabCall): State {
    const index = findTabIndex(state, payload);
    const value = state.tabs[index];

    if (-1 === index) {
        return state;
    }
    else {
        return {
            ...state,
            tabs: [
                ...state.tabs.slice(0, index),
                {
                    ...value,
                    ...payload.data,
                    dirty: 'boolean' === typeof payload.data.dirty ?
                        payload.data.dirty :
                        (value.value !== (payload.data.initialValue || value.initialValue))
                },
                ...state.tabs.slice(index + 1)
            ]
        };
    }
}