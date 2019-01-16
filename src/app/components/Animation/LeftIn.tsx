import * as React from 'react';
import Transition from 'react-transition-group/Transition';

const animationDuration = 300;
const containerAnimationDef = {
    defaultStyle: {
        position: 'absolute',
        overflow: 'hidden',
        zIndex: 600
    },

    alignStyle: {
        left: { left: 0 },
        right: { right: 0 }
    },

    entering: {
        padding: '0 50px 50px',
        margin: '0 -50px',
        overflow: 'hidden'
    },

    entered: {
        overflow: 'visible'
    },

    exiting: {
        padding: '0 50px 50px',
        margin: '0 -50px',
        overflow: 'hidden',
        zIndex: 500
    }
};
const animationDef = {
    defaultStyle: {
        transition: `transform ${animationDuration}ms cubic-bezier(0,0.5,0,1)`,
        transform: 'translateY(-100%)',
        marginTop: '0'
    },
    entering: {
        transform: 'translateY(0)'
    },
    entered: {
        transform: 'translateY(0)'
    },
    exited: {
        transform: 'translateY(-100%)',
        marginTop: '-100000px'
    }
};

export interface ILeftIn {
    visible: boolean;
    align?: 'left' | 'right';
    width?: number;
}

const LeftIn: React.SFC<ILeftIn> = props => (
    <Transition in={props.visible} timeout={animationDuration}>
        {(state: string) => (
            <div style={{...containerAnimationDef.defaultStyle, ...containerAnimationDef[state], ...(props.align ? containerAnimationDef.alignStyle : null)}}>
                <div style={{...animationDef.defaultStyle, ...animationDef[state], width: props.width}}>
                    {props.children}
                </div>
            </div>
        )}
    </Transition>
);

export default LeftIn;