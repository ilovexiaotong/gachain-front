import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Tabs, Tab } from 'react-bootstrap';
import { IFlowingCall, ISearchCall } from 'gachain/auth';

import Details from './Details';
export interface IRecordPromptProps {
    flowData: IFlowingCall[];
    getFlowing?: (params: ISearchCall) => void;
}
class Affair extends React.PureComponent<IRecordPromptProps> {
    state = {
        key: 1
    };

    componentDidMount() {
        this.getTransfer('income');
    }

    getTransfer = (value: string) => {
        this.props.getFlowing({
            searchType: value
        });
    }

    onOutInt = () => {
        if (this.state.key === 1) {
            this.setState({
                key: 2
            });
            this.getTransfer('outcome');
        } else {
            this.setState({
                key: 1
            });
            this.getTransfer('income');
        }
    }

    render() {
        return (
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" activeKey={this.state.key} onSelect={this.onOutInt.bind(this)}>
                <Tab eventKey={1} title={<FormattedMessage id="record.changeInto" defaultMessage="To change into" />}>
                   <Details {...this.props} />  
                </Tab>
                <Tab eventKey={2} title={<FormattedMessage id="record.changeOut" defaultMessage="Turn out" />}>
                   <Details {...this.props} />  
                </Tab>
            </Tabs>
        );
    }
}

export default Affair;