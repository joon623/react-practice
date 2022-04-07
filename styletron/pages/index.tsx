import type {NextPage} from 'next'
import {styled, useStyletron, withTransform} from "styletron-react";
import {useMutation, useQuery, useQueryClient} from "react-query";

const getTodos = () => {

}

const postTodo = () => {

}
const Home: NextPage = () => {
    const queryClient = useQueryClient()
    // const [hoverRef, hoverd] = useHover()

    const [css] = useStyletron();

    // Queries
    const query = useQuery('todos', getTodos)

    // Mutations
    const mutations = useMutation(postTodo, {
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries('todos')
        }
    })

    const Content = styled('div', {
        border: '2px solid black',
        borderWidth: '5px'
    });

    const Foo = styled('div');

    const Bar = withTransform(Foo, (style, props) => {
        console.log(style)
        console.log(props)
        let display =
            style.display === "none"
                ? "none"
                : props.$inline === true
                    ? "inline-flex"
                    : "flex";
        return {...style, display};
    })


    return (
        <>
            <Content $style={{height: "300px"}} hello/>
            <Bar>Bar</Bar>
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
