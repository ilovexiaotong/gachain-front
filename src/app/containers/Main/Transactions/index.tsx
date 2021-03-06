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

import * as React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'modules';
import { ISearchCall } from 'gachain/auth';
import { renderRecord, renderFlowing, renderTotal } from 'modules/transactions/actions';
import Record from 'components/Main/Transactions';
import { modalShow } from 'modules/modal/actions';
import { FormattedMessage } from 'react-intl';

const mapStateToProps = (state: IRootState) => ({
    cmd: state.record.cmd,
    data: state.record.data,
    ret_data_type: state.record.ret_data_type,
    flowData: state.record.flowData,
    totalData: state.record.totalData,
    wallet: state.auth.wallet
});

const mapDispatchToProps = {
    getRecord: renderRecord.started,
    getFlowing: ( params: ISearchCall ) => renderFlowing.started(params),
    getTotal: renderTotal.started,
    onCopy: () => modalShow({
        id: 'I_COPIED',
        type: 'INFO',
        params: {
            value: (<FormattedMessage id="alert.clipboard.copied" defaultMessage="alert.clipboard.copied" />)
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Record);