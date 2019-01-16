import { IRootState } from 'modules';
import { connect } from 'react-redux';

import RightMenuButton from 'components/Main/Toolbar/RightMenuButton';

const mapStateToProps = (state: IRootState) => {
    const section = state.sections.sections[state.sections.section] || state.sections.sections.home;
    return {
        isAuthorized: !!state.auth.privateKey,
        section: state.sections.section,
        sections: state.sections.sections,
        menus: section ? section.menus : []
    };  
};

const mapDispatchToProps = {
    onToogleButton: () => {
        console.log(456);
    }
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(RightMenuButton);