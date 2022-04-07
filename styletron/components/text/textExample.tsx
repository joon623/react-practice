import {styled} from "styletron-react";

const TextExample = () => {
    const Text = styled("p", {color: "red"});
    return (
        <>
            <Text>Rendered as a paragraph</Text>
            <Text $as="button">Rendered as a button</Text>
        </>
    );
};

export default TextExample;