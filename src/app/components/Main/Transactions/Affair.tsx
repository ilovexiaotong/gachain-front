import React from 'react';
import { intlShape, injectIntl } from 'react-intl';
import { Tabs, Tab } from 'react-bootstrap';
import { IFlowingCall, ISearchCall } from 'gachain/auth';

import Details from './Details';
export interface IRecordPromptProps {
    intl?: any;
    flowData: IFlowingCall[];
    getFlowing?: (params: ISearchCall) => void;
}
class Affair extends React.PureComponent<IRecordPromptProps> {
    static propTypes = {
        intl: intlShape.isRequired
    };

    state = {
        key: 1,
        detailsValue: 'noTransfer',
        detailsMessage: 'No transfer to record'
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
                key: 2,
                detailsValue: 'noTurningout',
                detailsMessage: 'No transfer record'
            });
            this.getTransfer('outcome');
        } else {
            this.setState({
                key: 1,
                detailsValue: 'noTransfer',
                detailsMessage: 'No transfer to record'
            });
            this.getTransfer('income');
        }
    }

    render() {
        let {
            intl: { formatMessage }
        } = this.props;

        return (
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" activeKey={this.state.key} onSelect={this.onOutInt.bind(this)}>
                <Tab eventKey={1} title={formatMessage({id: 'record.changeInto'})}>
                   <Details {...this.props}  detailsValue={this.state.detailsValue} detailsMessage={this.state.detailsMessage}/>  
                </Tab>
                <Tab eventKey={2} title={formatMessage({id: 'record.changeOut'})}>
                   <Details {...this.props}  detailsValue={this.state.detailsValue} detailsMessage={this.state.detailsMessage}/>  
                </Tab>
            </Tabs>
        );
    }
}

export default injectIntl(Affair as any);