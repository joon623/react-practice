import {styled} from "styletron-react";
import {MediaQueryButtonType} from "./mediaQueryType";


const mediaQuery = () => {
    const Button = styled('button', (props: MediaQueryButtonType) => ({
        fontSize: props.$compact ? "12px" : "16px",
        padding: props.$compact ? "0.25em" : "0.5em",
        margin: "0.5em"
    }))

    return (
        <>
            <Button>Standard Button</Button>
            <Button>Standard Button</Button>
        </>
    )
}