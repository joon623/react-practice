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

    return (
        <div>
            The current theme is: {theme}
            <button onClick={() => setTheme('light')}>Light Mode</button>
            <button onClick={() => setTheme('dark')}>Dark Mode</button>
        </div>
    )
}

export default Home
