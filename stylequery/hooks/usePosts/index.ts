import ky from "ky-universal"
import {useQuery} from "react-query";

const fetchPosts = async (limit = 10) => {
    const parsed = await ky('https://jsonplaceholder.typicode.com/posts').json()
    const result = parsed.filter(({id}: { id: number }) => id <= limit);
    return result
}

const usePosts = (limit: number) => {
    return useQuery(['post', limit], fetchPosts);
}

export {usePosts, fetchPosts}