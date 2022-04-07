import {useMemo, useState} from 'react';
import {styled} from "styletron-react";
import TextExample from "../components/text/textExample";
import BoringTextExample from "../components/text/boringTextExample";
import MostBoaringTextExample from "../components/text/mostBoaringTextExample";
import {NextPage} from "next";

const App = (): NextPage => {
    console.log("render")
    const [isActive, setIsActive] = useState(false)

    const Button = useMemo(() => styled('button', props => {
        return {
            padding: "0.5em 1em",
            color: props.$isActive ? "#fff" : "#000",
            background: props.$isActive ? "#276ef1" : "none",
            fontSize: "1em",
            borderRadius: "4px",
            border: "1px solid #aaa",
            ":hover": {
                background: props.$isActive ? "green" : "yellow"
            }
        }
    }), []);

    return (
        <>
            <Button
                $isActive={isActive}
                onClick={() => {
                    setIsActive(!isActive)
                }}
            >It is {isActive ? "on" : "off"}</Button>
            <TextExample/>
            <BoringTextExample/>
            <MostBoaringTextExample/>
        </>
    )
};

export default App;