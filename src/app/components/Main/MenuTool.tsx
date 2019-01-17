import * as React from 'react';
import themed from 'components/Theme/themed';
import { TSection } from 'gachain/content';
import _ from 'lodash';
import SectionButton from 'components/Main/SectionButton';
import StackGroup from 'components/Animation/StackGroup';
import ScrollView from 'components/ScrollView';
import Protypo from 'containers/Widgets/Protypo';

import { TMenu } from 'gachain/content';

const StyledMenuToolBody = themed.div`
    position: absolute;
    z-index: 1000;
    width: 300px;
    height: 80%;
    background: #FFFFFF;
    bottom: 0;
    right: -300px;
    transition: right 0.5s;
    &.menutool-active {
        right: 0
    }
`;

const StyledMenuToolButton = themed.button`
    position: absolute;
    top: 30%;
    border: none;
    height: 35px;
    line-height: 35px;
    width: 40px;
    background: #3a7ec2;
    color: #fff;
    left: -40px;
    opacity: .3;
    &:hover {
        opacity: 1;
    }
`;

const StyledMenuToolContent = themed.div`
    height: 100%;
`;

const StyleMenuToolSections = themed.ul`
    height: 100%;
    background: #3a7ec2;
    overflow: hidden;
    width: 80px;
    padding: 0;
    float: right;

    li {
        list-style: none;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        color: #fff;
        width: 80px;
        height: 50px;
        line-height: 50px;
        
        &.section-active {
            background: #fff;
            color: #4472a8;
        }

        button {
            padding: 0 !important;
            width: 100% !important;
        }
    }
`;

const StyledMenus = themed.div`
    height: 100%;
    float: right;
    width: 220px;
    background: #ffffff;
    position: relative;
    height: 100%;
`;

const StyledMenuContent = themed.div``;

const StyledBackButton = themed.button`
    position: relative;
    display: block;
    width: 100%;
    height: 58px;
    padding: 10px 25px;
    color: ${props => props.theme.menuPrimaryForeground};
    font-weight: 300;
    text-decoration: none;
    outline: none;
    border: none;
    text-align: left;
    background: transparent;
    
    &.disabled {
        &:hover {
            color: ${props => props.theme.menuPrimaryForeground};
        }
    }

    &:hover {
        color: ${props => props.theme.menuPrimaryActive};
    }

    .icon {
        vertical-align: top;
        display: inline-block;
        width: 30px;
    }

    em {
        font-size: 15px;
    }

    span {
        font-size: 21px;
        font-weight: 300;
    }
`;

export interface IMenuToolProps {
    active: boolean;
    isAuthorized: boolean;
    section: string;
    sections: { [name: string]: TSection };
    menus: TMenu[];
    menuPop: () => void;
    onSwitchSection: (section: string) => void;
    onCloseSection: (section: string) => void;
    onToogle: () => void;
}

interface IMenuToolState {
    active: boolean;
}

class MenuTool extends React.Component<IMenuToolProps, IMenuToolState> {
    constructor(props: any) {
        super(props);
        this.state = {
            active: false
        };
    }

    onToggle(e: React.MouseEvent<HTMLButtonElement>): void {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        return (
            <StyledMenuToolBody className={this.state.active ? 'menutool-active' : ''}>
                <StyledMenuToolButton onClick={(e) => this.onToggle(e)}>
                    <em className="icon icon-settings" />
                </StyledMenuToolButton>
                <StyledMenuToolContent>
                    <StyleMenuToolSections>
                        {_.map(this.props.sections, l => l.visible && l.name !== 'home' && l.name !== 'editor' ? (
                            <li key={l.name} className={this.props.section === l.name ? 'section-active' : ''}>
                                <SectionButton
                                    active={this.props.section === l.name}
                                    closeable={l.closeable}
                                    onClick={this.props.onSwitchSection.bind(this, l.name)}
                                    onClose={this.props.onCloseSection.bind(this, l.name)}
                                >
                                    {l.title}
                                </SectionButton>
                            </li>
                        ) : null)}
                    </StyleMenuToolSections>
                    <StyledMenus>
                        <StackGroup
                            items={this.props.menus.map((menu, index) => (
                                <ScrollView disableHorizontal>
                                    <StyledMenuContent>
                                        {index > 0 && (
                                            <StyledBackButton onClick={() => this.props.menuPop()} disabled={1 >= this.props.menus.length}>
                                                <div className="title-wrap">
                                                    <span className="icon">
                                                        <em className="icon-arrow-left" />
                                                    </span>
                                                    <span>{menu.name}</span>
                                                </div>
                                            </StyledBackButton>
                                        )}
                                        <Protypo
                                            context="menu"
                                            content={menu.content}
                                        />
                                    </StyledMenuContent>
                                </ScrollView>
                            ))}
                        />
                    </StyledMenus>
                </StyledMenuToolContent>
            </StyledMenuToolBody>
        );
    }
}

export default MenuTool;
