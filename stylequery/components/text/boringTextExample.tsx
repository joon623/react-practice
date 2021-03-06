import React from 'react';
import {styled} from "styletron-react";

const BoringTextExample = () => {
    const BoringText = styled<any>('div', {color: "grey"});

    return (
        <>
            <BoringText $style={{marginTop: '30px'}}>pretty in pink</BoringText>
            <BoringText
                $style={props => {
                    return {color: props.$special ? "hotpink" : "gray"}
                }}
                $special
            >
                pink panther
            </BoringText>
        </>
    );
}

export default BoringTextExample;