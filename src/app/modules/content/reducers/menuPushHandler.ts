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
import { menuPush } from '../actions';
import { Reducer } from 'modules';

const menuPushHandler: Reducer<typeof menuPush, State> = (state, payload) => {
    const menuIndex = state.sections[state.section].menus.findIndex(l =>
        l.name === payload.name);

    return {
        ...state,
        sections: {
            ...state.sections,
            [state.section]: {
                ...state.sections[state.section],
                menus: -1 === menuIndex ? [...state.sections[state.section].menus, payload] : [
                    ...state.sections[state.section].menus.slice(0, menuIndex),
                    payload,
                    ...state.sections[state.section].menus.slice(menuIndex + 1)
                ]
            }
        }
    };
};

export default menuPushHandler;