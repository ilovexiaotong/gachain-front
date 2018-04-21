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
import { constructorRedo } from '../actions';
import { Reducer } from 'modules';

const constructorRedoHandler: Reducer<typeof constructorRedo.done, State> = (state, payload) => ({
    ...state,
    tabs: [
        ...state.tabs.slice(0, state.tabIndex),
        {
            ...state.tabs[state.tabIndex],
            designer: {
                ...state.tabs[state.tabIndex].designer,
                data: {
                    ...state.tabs[state.tabIndex].designer.data,
                    jsonData: payload.result.jsonData,
                    treeData: payload.result.treeData,
                    selectedTag: null
                },
                history: {
                    ...state.tabs[state.tabIndex].designer.history,
                    position: payload.result.position,
                    canUndo: payload.result.canUndo,
                    canRedo: payload.result.canRedo
                }
            }
        },
        ...state.tabs.slice(state.tabIndex + 1),
    ]
});

export default constructorRedoHandler;