import { IRootState } from 'modules';
import { connect } from 'react-redux';

import RightMenuButton from 'components/Main/Toolbar/RightMenuButton';

const mapStateToProps = (state: IRootState) => ({
    isAuthorized: !!state.auth.privateKey,
});

const mapDispatchToProps = {

};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(RightMenuButton);