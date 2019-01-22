import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Table } from 'react-bootstrap';
import QRCode from 'qrcode.react';
import { IRecordCall, IFlowingCall, ITotalCall } from 'gachain/auth';
import { qGacToGac } from 'lib/tx/convert';
import CopyToClipboard from 'react-copy-to-clipboard';
export interface IRecordPromptProps {
  data: IRecordCall;
  flowData: IFlowingCall[];
  totalData: ITotalCall;
}

class Member extends React.PureComponent<IRecordPromptProps>  {
  state = {
    value: ''
  };

  clickCp = (val: string) => {
    return val;
  }

  render() {
    return (
      <Row style={{ padding: '0 40px 0 40px', color: 'rgba(0,0,0,.85)' }}>
        <Row style={{ textAlign: 'center' }}>
          <span style={{ backgroundColor: 'rgb(135, 208, 104)', borderRadius: '50%', fontSize: '36px', padding: '10px 20px', color: '#fff' }}><em className="fa fa-user-o" /></span>
        </Row>
        <Row style={{ lineHeight: '50px', margin: '20px' }}>
          <Row style={{ textAlign: 'center', color: '#333' }}>
            <strong>{this.props.data.id}</strong>
            <CopyToClipboard text={this.clickCp(this.state.value)} onCopy={() => this.setState({ value: this.props.data.id })}><span style={{ margin: '0 0 0 20px', fontSize: '24px', cursor: 'pointer' }}><em className="fa fa-copy" title="双击复制" /></span></CopyToClipboard>
          </Row>
          <Row>
            <Col xs={12} md={4}><FormattedMessage id="record.assetsName" defaultMessage="Asset name" /></Col>
            <Col xs={12} md={8}><FormattedMessage id="record.balance" defaultMessage="Balance" /></Col>
          </Row>
          <Row>
            <Col xs={12} md={4}><span>GAC</span></Col>
            <Col xs={12} md={8}><span style={{ width: '8rem', background: '#00b1ec', color: '#fff', height: '2rem', textAlign: 'center', borderRadius: '.5rem', padding: '.25rem 1rem' }}><span>{qGacToGac(this.props.data.amount)}</span><span style={{ marginLeft: '5px' }}>GAC</span></span></Col>
          </Row>
          <Row>
            <Row style={{ textAlign: 'center' }}><span style={{ backgroundColor: '#fff', fontSize: '16px' }}><FormattedMessage id="record.information" defaultMessage="Transaction information" /></span></Row>
            <Row style={{ marginTop: '20px' }}>
              <Table striped bordered condensed hover>
                <tbody>
                  <tr style={{ backgroundColor: '#e8e8e8' }}>
                    <td style={{ borderColor: '#e8e8e8' }}><strong><FormattedMessage id="record.volume" defaultMessage="Transaction volume" /></strong></td>
                    <td style={{ borderColor: '#e8e8e8' }}>{this.props.totalData.transaction}</td>
                  </tr>
                  <tr>
                    <td style={{ borderColor: '#fff' }}><strong><FormattedMessage id="record.into" defaultMessage="Total number transferred" /></strong></td>
                    <td style={{ borderColor: '#fff' }}>{qGacToGac(this.props.totalData.inamount)} GAC</td>
                  </tr>
                  <tr style={{ backgroundColor: '#e8e8e8' }}>
                    <td style={{ borderColor: '#e8e8e8' }}><strong><FormattedMessage id="record.turnOut" defaultMessage="Total turn out" /></strong></td>
                    <td style={{ borderColor: '#e8e8e8' }}>{qGacToGac(this.props.totalData.outamount)} GAC</td>
                  </tr>
                  <tr>
                    <td style={{ borderBottom: '1px sold #eee', borderRightColor: '#fff', borderLeftColor: '#fff' }}><strong><FormattedMessage id="record.balance" defaultMessage="Balance" /></strong></td>
                    <td style={{ borderBottom: '1px sold #eee', borderRightColor: '#fff' }}>{qGacToGac(this.props.totalData.amount)} GAC</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Row>
          <Row style={{ textAlign: 'center' }}>
            <Row><span style={{ backgroundColor: '#fff', fontSize: '16px' }}><FormattedMessage id="record.qrCode" defaultMessage="QR code" /></span></Row>
            <Row style={{ marginTop: '20px' }}>
              <QRCode value={this.props.data.id} />
            </Row>
          </Row>
        </Row>
      </Row>
    );
  }
}
export default Member;