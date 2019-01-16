import React from 'react';
import themed from 'components/Theme/themed';
import { TSection } from 'gachain/content';
import _ from 'lodash';
import SectionButton from 'components/Main/SectionButton';
import StackGroup from 'components/Animation/StackGroup';
import ScrollView from 'components/ScrollView';
import Protypo from 'containers/Widgets/Protypo';
import LeftInToolButton from 'components/Main/Toolbar/LeftInToolButton';

import { TMenu } from 'gachain/content';

export interface IRightMenuButtonProps {
    isAuthorized: boolean;
    section: string;
    sections: { [name: string]: TSection };
    menus: TMenu[];
    menuPop: () => void;
    onSwitchSection: (section: string) => void;
    onCloseSection: (section: string) => void;
    onToogleButton: () => void;
}

// const StyledRightMenu = themed.div`
//     display: inline-block;
//     height: 80%;
//     position: absolute;
//     width: 500px;
//     background: #ffffff;
//     z-index: 500;
//     right: 0;
//     top: 80px;
//     border: 1px solid #777777;
// `;

const StyledRightMenuButton = themed.button`
    display: inline-block;
    height: 3rem;
    width: 3rem;
    position: absolute;
    top: 50%;
    background: #3a7ec2;
    z-index: 999;
    color: #fff;
    text-align: center;
    line-height: 3rem !important;
    border-radius: 0.6rem 0px 0px 0.6rem;
    cursor: pointer;
    left: -36px;
    border: none;
`;

const StyledRightMenuBody = themed.section`

`;

const StyledMenuContent = themed.div`
    position: absolute;
    top: 25px;
    right: 0;
    left: 0;
    bottom: 0;
    background: ${props => props.theme.menuBackground};

    > div {
        background: ${props => props.theme.menuBackground};
    }

    .title-wrap {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`;

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

const StyledRightMenuSections = themed.ul`
    height: 24px;
    padding: 0;
    background: #4c7dbd;
    li {
        float: left;
        list-style: none;
    }
`;

const StyleRightMenuContent = themed.div`

`;

const RightMenuButton: React.SFC<IRightMenuButtonProps> = props => (
    <LeftInToolButton>
        <StyledRightMenuButton className="left-into-toggle" onClick={props.onToogleButton}>
            <em className="icon icon-settings" />
        </StyledRightMenuButton>
        <StyledRightMenuBody>
            <StyledRightMenuSections>
                {_.map(props.sections, l => l.visible ? (
                    <li key={l.name}>
                        <SectionButton
                            active={props.section === l.name}
                            closeable={l.closeable}
                        // onClick={props.onSwitchSection}
                        // onClose={props.onCloseSection.bind(this, l.name)}
                        >
                            {l.title}
                        </SectionButton>
                    </li>
                ) : null)}
            </StyledRightMenuSections>
            <StyleRightMenuContent>
                <StackGroup
                    items={props.menus.map((menu, index) => (
                        <ScrollView disableHorizontal>
                            <StyledMenuContent>
                                {index > 0 && (
                                    <StyledBackButton onClick={() => props.menuPop()} disabled={1 >= props.menus.length}>
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
            </StyleRightMenuContent>
        </StyledRightMenuBody>
    </LeftInToolButton>
);

export default RightMenuButton;
