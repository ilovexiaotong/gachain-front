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
import defaultLocale from 'lib/en-US.json';
import { reducerWithInitialState } from 'typescript-fsa-reducers/dist';
import initializeDoneHandler from './reducers/initializeDoneHandler';
import setLocaleDoneHandler from './reducers/setLocaleDoneHandler';
import setCollapsedHandler from './reducers/setCollapsedHandler';
import initializeFailedHandler from './reducers/initializeFailedHandler';
import initializeHandler from './reducers/initializeHandler';

export type State = {
    readonly nodeHost: string;
    readonly localeMessages: { [key: string]: string };
    readonly isCollapsed: boolean;
    readonly isLoaded: boolean;
    readonly isOffline: boolean;
    readonly isConnecting: boolean;
};

export const initialState: State = {
    nodeHost: null,
    localeMessages: defaultLocale,
    isCollapsed: true,
    isLoaded: false,
    isOffline: false,
    isConnecting: false
};

export default reducerWithInitialState<State>(initialState)
    .case(actions.initialize.started, initializeHandler)
    .case(actions.initialize.done, initializeDoneHandler)
    .case(actions.initialize.failed, initializeFailedHandler)
    .case(actions.setCollapsed, setCollapsedHandler)
    .case(actions.setLocale.done, setLocaleDoneHandler);