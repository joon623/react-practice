import React from 'react';
import {styled, withStyle} from "styletron-react";

const MostBoaringTextExample = () => {
    const BoringText = styled("div", {color: "gray"});
    const MostBoringText = withStyle(BoringText, {color: "dimgray"});

    return (
        <>
            <MostBoringText $style={{color: "hotpink"}}>
                on wednesday we wear pink
            </MostBoringText>
        </>
    )
}

export default MostBoaringTextExample;