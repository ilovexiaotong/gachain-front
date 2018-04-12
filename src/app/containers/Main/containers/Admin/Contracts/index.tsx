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
import { connect } from 'react-redux';
import { IRootState } from 'modules';
import { getContracts } from 'modules/admin/actions';

import DataPreloader from 'components/Animation/DataPreloader';
import Contracts from 'components/Main/Admin/Contracts';

interface IContractsContainerProps {

}

interface IContractsContainerState {
    contracts: {
        id: string;
        name: string;
        value: string;
        wallet_id: string;
        address: string;
        conditions: string;
        token_id: string;
        active: string;
    }[];
}

interface IContractsContainerDispatch {
    getContracts: typeof getContracts.started;
}

class ContractsContainer extends React.Component<IContractsContainerProps & IContractsContainerState & IContractsContainerDispatch> {
    componentWillMount() {
        this.props.getContracts({});
    }

    render() {
        return (
            <DataPreloader data={[this.props.contracts]}>
                <Contracts contracts={this.props.contracts} />
            </DataPreloader>
        );
    }
}

const mapStateToProps = (state: IRootState, ownProps: IContractsContainerProps) => ({
    contracts: state.admin.contracts
});

const mapDispatchToProps = {
    getContracts: getContracts.started
};

export default connect<IContractsContainerState, IContractsContainerDispatch, IContractsContainerProps>(mapStateToProps, mapDispatchToProps)(ContractsContainer);