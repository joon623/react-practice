import React from 'react';
import {styled, withWrapper} from 'styletron-react';

const Foo = styled('div', {color: 'red'});

const Wrapped = withWrapper(Foo, (Styled) => (props) => {
    return <Styled {...props} />;
});

const WithWrapper = () => {
    return (
        <div>
            <Wrapped $pso $aoai/>
            WithWrapper
        </div>
    );
};

export default WithWrapper;
