import React from 'react';
import classNames from 'classnames';

import themed from 'components/Theme/themed';
import LeftIn from 'components/Animation/LeftIn';

const StyledLeftIn = themed.div`

`;

export interface ILeftInButtonProps {
    content: React.ReactNode;
    className?: string;
    disabled?: boolean;
    align?: 'left' | 'right';
    width?: number;
    leftMost?: boolean;
    rightMost?: boolean;
    onClick?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
}

interface ILeftInState {
    active: boolean;
}

class LeftInButton extends React.Component<ILeftInButtonProps, ILeftInState> {
    constructor(props: any) {
        super(props);
        this.state = {
            active: false
        };
    }

    render() {
        return (
            <StyledLeftIn className={this.state.active ? 'leftin-active' : ''}>
                <button disabled={this.props.disabled} className={classNames('leftin-toogle', this.props.className)}>
                    {this.props.children}
                </button>
                <LeftIn visible={this.state.active} align={this.props.align} width={this.props.width}>
                    <div className={classNames('leftin-content')}>
                        {this.props.content}
                    </div>
                </LeftIn>
            </StyledLeftIn>
        );
    }
}

export default LeftInButton;