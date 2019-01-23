import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-bootstrap';
import { qGacToGac } from 'lib/tx/convert';
import { IFlowingCall } from 'gachain/auth';
import moment from 'moment';
export interface IRecordPromptProps {
    flowData: IFlowingCall[];
    detailsValue: string;
    detailsMessage: string;
}
class Details extends React.PureComponent<IRecordPromptProps> {
    render() {
        return (
                    <div style={{ textAlign: 'center', color: 'rgb(153, 153, 153)' }}>
                        {this.props.flowData === null ? <FormattedMessage id={`record.${this.props.detailsValue}`} defaultMessage={this.props.detailsMessage} /> :
                                this.props.flowData.map((item, k) => (
                                    <Row key={k} style={{ border: '1px solid #e6e6e6', textAlign: 'left', marginTop: '20px' }}>
                                        <div style={{ borderRadius: '0 0 4px 4px', lineHeight: '22px', padding: '12px 0 12px 40px', backgroundColor: '#fafafa', color: 'rgba(0,0,0,.85)', cursor: 'pointer', borderBottom: '1px solid #e6e6e6' }}><span>{moment(item.created_at).fromNow()}</span></div>
                                        <div style={{ margin: '20px 40px' }}>
                                            <Row><span style={{ color: '#262626' }}><FormattedMessage id="record.hash" defaultMessage="Transaction hash" />:</span><span style={{ marginLeft: '4px' }}>{item.txhash}</span>
                                            </Row>
                                            <Row><span style={{ color: '#262626' }}><FormattedMessage id="record.time" defaultMessage="Generation time" />:</span><span style={{ marginLeft: '4px' }}>{item.created_at}</span>
                                            </Row>
                                            <Row><span style={{ color: '#262626'}}><FormattedMessage id="record.utcTime" defaultMessage="UTC time" />:</span><span style={{ marginLeft: '10px' }}>{moment(item.created_at).utc().format()}</span>
                                            </Row>
                                            <Row>
                                                <Col xs={12} md={4} >{item.sender_id}</Col>
                                                <Col xs={12} md={4}>{item.recipient_id}</Col>
                                            </Row>
                                            <Row>
                                                <span style={{ color: '#262626' }}><FormattedMessage id="record.accounts" defaultMessage="Transfer amount" />:</span><span style={{ width: '8rem', background: '#00b1ec', color: '#fff', height: '2rem', textAlign: 'center', borderRadius: '.5rem', padding: '.25rem 1rem', margin: '0px 0 0 8px' }}>{qGacToGac(item.amount)}<span style={{ marginLeft: '4px' }}>GAC</span></span>
                                            </Row>
                                        </div>
                                    </Row>
                                ))}
                    </div>
        );
    }
}

export default Details;