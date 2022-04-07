import type {NextPage} from 'next'
import {useStyletron} from "styletron-react";

const Home: NextPage = () => {
    const [css] = useStyletron();

    return (
        <>
            <button className={css({color: "red"})}>
                Red Button
            </button>
            <button className={css({color: "blue"})}>
                Blue Button
            </button>
        </>
    )
}

export default Home
