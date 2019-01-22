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

import React from 'react';
import { FormattedMessage } from 'react-intl';
import PageLink from 'containers/Routing/PageLink';
import { CloseDropdownButton } from 'components/DropdownButton';
import themed from 'components/Theme/themed';

import SystemButton from './SystemButton';

const StyledTransactionButton = themed.span`
    text-align: 'center'
`;

const TransactionMenu: React.SFC<{}> = props => (
    <SystemButton
        className="p0"
        width={180}
        align="right"
        content={
            (
                <ul className="dropdown-group">
                    <li>
                        <PageLink page="record">
                            <CloseDropdownButton>
                                {/* <em className="icon icon-shield text-muted" /> */}
                                <StyledTransactionButton>
                                    <FormattedMessage id="general.transaction.record" defaultMessage="Transaction record" />
                                </StyledTransactionButton>
                            </CloseDropdownButton>
                        </PageLink>
                    </li>
                </ul>
            )
        }
    >
        <em className="icon fa fa-file-text" />
    </SystemButton>
);

export default TransactionMenu;