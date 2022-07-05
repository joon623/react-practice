import type {NextPage} from 'next'
import {useEffect, useState} from "react";
import {useTheme} from "next-themes";


const Home: NextPage = () => {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false);

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)

    }, [])

    if (!mounted) {
        return null
    }
    const foo = () => {
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme:dark)").matches
        console.log(systemPrefersDark)

        function handleTheme() {
            document.body.dataset.theme = systemPrefersDark ? 'dark ' : 'light'
        }

        handleTheme()
    }

    return (
        <div
            style={{background: "var(--hello)"}}
        >
            The current theme is: {theme}
            <button onClick={() => setTheme('light')}>Light Mode</button>
            <button onClick={() => setTheme('dark')}>Dark Mode</button>
            <button onClick={foo}>System setting</button>
        </div>
    )
}

export default Home
