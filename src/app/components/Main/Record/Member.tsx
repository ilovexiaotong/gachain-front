import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';

class Member extends React.PureComponent {
  render() {
    return (
      <Row style={{ padding: '0 40px 0 40px', color: 'rgba(0,0,0,.85)' }}>
        <Row style={{ textAlign: 'center' }}>
          <span style={{ backgroundColor: 'rgb(135, 208, 104)', borderRadius: '50%', fontSize: '36px', padding: '10px 20px', color: '#fff' }}><em className="fa fa-user-o" /></span>
        </Row>
        <Row style={{ lineHeight: '50px', margin: '20px' }}>
          <Row style={{ textAlign: 'center', color: '#333' }}>
            <strong>1429582920081315677</strong>
            <span style={{ margin: '0 0 0 20px', fontSize: '24px' }}><em className="fa fa-copy" /></span>
          </Row>
          <Row>
            <Col xs={12} md={4}><span>资产名称</span></Col>
            <Col xs={12} md={8}><span>余额</span></Col>
          </Row>
          <Row>
            <Col xs={12} md={4}><span>GAC</span></Col>
            <Col xs={12} md={8}><span style={{ width: '8rem', background: '#00b1ec', color: '#fff', height: '2rem', textAlign: 'center', borderRadius: '.5rem', padding: '.25rem 1rem' }}>1,555.4000 GAC</span></Col>
          </Row>
          <Row>
            <Row><span style={{ margin: '0 0 0 30%', position: 'absolute', display: 'block', padding: '0 2px 0 2px', backgroundColor: '#fff', fontSize: '16px' }}>交易信息</span><hr style={{ border: '1px dashed #eee' }} /></Row>
            <Row style={{ marginTop: '20px' }}>
              <Table striped bordered condensed hover>
                <tbody>
                  <tr style={{ backgroundColor: '#e8e8e8' }}>
                    <td style={{ borderColor: '#e8e8e8' }}><strong>交易数量: </strong></td>
                    <td style={{ borderColor: '#e8e8e8' }}>1</td>
                  </tr>
                  <tr>
                    <td style={{ borderColor: '#fff' }}><strong>转入总数: </strong></td>
                    <td style={{ borderColor: '#fff' }}>1,555.4000 GAC</td>
                  </tr>
                  <tr style={{ backgroundColor: '#e8e8e8' }}>
                    <td style={{ borderColor: '#e8e8e8' }}><strong>转出总数: </strong></td>
                    <td style={{ borderColor: '#e8e8e8' }}>0 GAC</td>
                  </tr>
                  <tr>
                    <td style={{ borderBottom: '1px sold #eee', borderRightColor: '#fff', borderLeftColor: '#fff' }}><strong>余额: </strong></td>
                    <td style={{ borderBottom: '1px sold #eee', borderRightColor: '#fff' }}>1,555.4000 GAC</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Row>
          <Row>
            <Row><span style={{ margin: '0 0 0 31%', position: 'absolute', display: 'block', padding: '0 2px 0 2px', backgroundColor: '#fff', fontSize: '16px' }}>二维码</span><hr style={{ border: '1px dashed #eee' }} /></Row>
            <Row style={{ textAlign: 'center', marginTop: '20px' }}>
              <span style={{ padding: '20px 20px', backgroundColor: '#000' }}>.</span>
            </Row>
          </Row>
        </Row>
      </Row>
    );
  }
}

export default Member;