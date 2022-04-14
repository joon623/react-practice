import {styled} from "styletron-react";

const StyledTextExample = styled("div", {color: "red"})

const CompoundStyledTextExample = () => {
    return (
        <>
            <StyledTextExample/>
            <StyledTextExample $as={"button"}/>
        </>
    )
}

export {StyledTextExample, CompoundStyledTextExample}