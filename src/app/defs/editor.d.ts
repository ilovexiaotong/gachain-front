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

declare module 'gachain/editor' {
    import { TProtypoElement } from 'gachain/protypo';

    type TEditorTab = {
        readonly type: string;
        readonly id: string;
        readonly new: boolean;
        readonly name: string;
        readonly tool: string;
        readonly value: string;
        readonly initialValue: string;
        readonly preview?: TProtypoElement[];
        readonly dirty: boolean;
    };

    interface IEditorTabCreateCall {
        id: string;
        name: string;
        value: string
    }

    interface ILoadEditorTabCall {
        type: string;
        name: string;
    }

    interface IReloadEditorTabCall {
        type: string;
        id: string;
        data: Partial<TEditorTab>;
    }
}