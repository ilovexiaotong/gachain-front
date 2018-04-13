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

import * as React from 'react';
import { Button } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import LocalizedDocumentTitle from 'components/DocumentTitle/LocalizedDocumentTitle';
import Heading from './Heading';

export interface IWelcomeProps {
    onConfirm: () => void;
}

const Welcome: React.SFC<IWelcomeProps> = (props) => (
    <LocalizedDocumentTitle title="auth.welcome" defaultTitle="Welcome">
        <div>
            <Heading>Gachain</Heading>
            <h4>
                <FormattedMessage id="auth.welcome" defaultMessage="Welcome" />
            </h4>
            <p className="pv">
                <FormattedMessage id="auth.welcome.guide" defaultMessage="Before proceeding, you will now be guided through the account creation process. This will not take too much of your time. After completing this process you will be able to use all features of Gachain" />
            </p>
            <p>
                <FormattedMessage id="auth.welcome.continue" defaultMessage="Press 'Get started' button to begin the process of creating or restoring your account" />
            </p>
            <hr />
            <Button bsStyle="primary" className="btn-block" onClick={props.onConfirm}>
                <FormattedMessage id="auth.getstarted" defaultMessage="Get started" />
            </Button>
        </div>
    </LocalizedDocumentTitle>
);

export default Welcome;