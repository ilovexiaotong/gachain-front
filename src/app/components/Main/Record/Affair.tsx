import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

class Affair extends React.PureComponent {
    render() {
        return (
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="转入">
                    <div style={{ textAlign: 'center', color: 'rgb(153, 153, 153)' }}>
                        <span>暂无转入记录</span>
                    </div>
                </Tab>
                <Tab eventKey={2} title="转出">
                    <div style={{ textAlign: 'center', color: 'rgb(153, 153, 153)' }}>
                        <span>暂无转出记录</span>
                    </div>
                </Tab>
            </Tabs>
        );
    }
}

export default Affair;