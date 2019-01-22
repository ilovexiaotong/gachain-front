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
import { Row, Col, Panel } from 'react-bootstrap';
import { IRecordCall, ISearchCall, IFlowingCall, ITotalCall } from 'gachain/auth';
import Member from './Member';
import Affair from './Affair';

export interface IRecordPromptProps {
    cmd: string;
    data: IRecordCall;
    ret_data_type: string;
    flowData: IFlowingCall[];
    totalData: ITotalCall;
    getRecord?: () => any;
    getFlowing?: (params: ISearchCall) => void;
    getTotal?: () => any;
}

class Record extends React.Component<IRecordPromptProps> {
    componentDidMount () {
       this.props.getRecord();
       this.props.getTotal();
    }
    render() {
        return (
            <div style={{ margin: '0 20px' }}>
                <Row className="show-grid" >
                    <Col xs={12} md={5}>
                        <code>
                            <Panel
                                bsStyle="primary"
                                header={<FormattedMessage id="record.member" defaultMessage="Member information" />}
                            >
                                <Member
                                  {...this.props}
                                />
                            </Panel>
                        </code>
                    </Col>
                    <Col xs={12} md={7}>
                        <code>
                            <div>
                                <Panel
                                    bsStyle="primary"
                                    header={<FormattedMessage id="record.transaction" defaultMessage="Transaction/transaction" />}
                                >
                                    <Affair 
                                       {...this.props}
                                    />
                                </Panel>
                            </div>
                        </code>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Record;