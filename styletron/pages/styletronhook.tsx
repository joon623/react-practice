import React, {useRef} from 'react';
import {styled, useStyletron} from "styletron-react";

const THEME = {
    colors: {
        primary: ["#276EF1", "#174EB6", "#9CBCF8"],
        positive: ["#07A35A", "#057C44", "#88D3B0"]
    },
    sizing: ["2px", "6px", "10px", "16px", "24px"]
};

const MyComponent = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [css] = useStyletron();

    const Input = styled('input', {background: "#FFE1A5"})
    const Content = styled('div', {
        border: '2px solid black',
        borderWidth: '5px'
    });


    return (
        <>
            <Input ref={inputRef}/>
            <button onClick={() => inputRef?.current.focus()}>Focus input</button>
            <button className={css({color: 'red'})}>button</button>
            <Input className={css({color: 'red'})} $style={{outline: "none", background: "none"}}
                   $as={"button"}>button</Input>
            <button className={css({color: 'blue'})}>button</button>
            <Content/>
        </>
    );
};

export default MyComponent;
