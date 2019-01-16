import * as React from 'react';
// import styled from 'styled-components';
// import classNames from 'classnames';

import LeftInButton from 'components/LeftInButton';

export interface ILeftInButtonProps {
    icon?: string;
    className?: string;
    disabled?: boolean;
    right?: boolean;
    leftMost?: boolean;
    content?: React.ReactNode;
}

const LeftInToolButton: React.SFC<ILeftInButtonProps> = props => (
    <LeftInButton
        align={props.right ? 'right' : 'left'}
        width={200}
        disabled={props.disabled}
        leftMost={props.leftMost}
        content={props.content}
        className="icon-left"
    />
);

export default LeftInToolButton;