import React from 'react';
import themed from 'components/Theme/themed';
import Toolbar from './';

export interface IRightMenuButtonProps {
    isAuthorized: boolean;
    section: string;
}

const StyledRightMenu = themed.div`
    display: inline-block;
    height: 500px;
    position: absolute;
    width: 200px;
    background: #ffffff;
    z-index: 500;
    right: 0;
    top: 80px;
    border: 1px solid #777777;
`;

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
`;

const StyledRightMenuButtonContent = themed.section`

`;
const RightMenuButton: React.SFC<IRightMenuButtonProps> = props => (
    <StyledRightMenu>
        <StyledRightMenuButton className="left-into-toggle ">
            <em className="icon icon-settings" />
        </StyledRightMenuButton>
        <StyledRightMenuButtonContent>
            <Toolbar>
                {'editor' === props.section ?
                    (
                        <EditorToolbar />
                    ) : (
                        <div>
                            <ToolButton icon="icon-arrow-left" onClick={this.onBack}>
                                <FormattedMessage id="navigation.back" defaultMessage="Back" />
                            </ToolButton>
                            <ToolButton icon="icon-arrow-right" onClick={this.onForward}>
                                <FormattedMessage id="navigation.forward" defaultMessage="Forward" />
                            </ToolButton>
                            <ToolButton icon="icon-home" onClick={this.props.onNavigateHome}>
                                <FormattedMessage id="navigation.home" defaultMessage="Home" />
                            </ToolButton>
                            <ToolButton icon="icon-refresh" onClick={this.props.onRefresh}>
                                <FormattedMessage id="navigation.refresh" defaultMessage="Refresh" />
                            </ToolButton>
                        </div>
                    )
                }
            </Toolbar>
        </StyledRightMenuButtonContent>
    </StyledRightMenu>
);

export default RightMenuButton;
