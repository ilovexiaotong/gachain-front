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

import React from 'react';
import Backup from 'containers/Main/Backup';
import Editor from 'containers/Main/Editor';
import Invite from 'containers/Main/Legacy/Invite';

export interface ILegacyPage {
    menu: string;
    section: string;
    render: (props?: { [key: string]: any }) => React.ReactNode;
}

const LEGACY_PAGES: { [page: string]: ILegacyPage } = {
    'backup': { section: 'home', menu: null, render: () => <Backup /> },
    'editor': { section: 'editor', menu: null, render: (props: { open?: string, create?: string, name?: string, vde?: string }) => <Editor {...props} /> },
    '@invite': { section: 'home', menu: null, render: (props: { ecosystem: string, page?: string }) => <Invite {...props} /> }
};

export {
    LEGACY_PAGES
};