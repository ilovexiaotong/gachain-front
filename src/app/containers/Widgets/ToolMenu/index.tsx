import { IRootState } from 'modules';
import { Dispatch, connect } from 'react-redux';
import { menuPop, menuPush, renderSection, closeSection } from 'modules/sections/actions';
import MenuTool from 'components/Main/MenuTool';

const mapStateToProps = (state: IRootState) => {
    const section = state.sections.sections[state.sections.section] || state.sections.sections.home;
    return {
        isAuthorized: !!state.auth.privateKey,
        section: state.sections.section,
        sections: state.sections.sections,
        menus: section ? section.menus : []
    };  
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    menuPop: () => {
        dispatch(menuPop());
    },
    menuPush,
    onSwitchSection: (section: string) => {
        dispatch(renderSection(section));
    },
    onCloseSection: (section: string) => {
        dispatch(closeSection(section));
    }
});

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(MenuTool);