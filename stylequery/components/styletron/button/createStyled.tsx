import React from 'react';
import {StyleObject} from 'styletron-standard';
import {createStyled} from 'styletron-react';

const THEME = {
    colors: {
        primary: ['#276EF1', '#174EB6', '#9CBCF8'],
        positive: ['#07A35A', '#057C44', '#88D3B0'],
    },
    sizing: ['2px', '6px', '10px', '16px', '24px'],
};

function driver(style: StyleObject, engine: any): string {
    return engine.someMethod(style);
}

function getInitialStyle(): StyleObject {
    return {};
}

const wrapper = (StyledComponent) => (props) =>
    (
        <div>
            <StyledComponent {...props} />
        </div>
    );

const styled = createStyled({getInitialStyle, driver, wrapper});

const CreateStyled = () => {
    return (
        <div>
            CreateStyled
            <div>CreateStyled</div>
        </div>
    );
};

export default CreateStyled;
