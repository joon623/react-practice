import React, {FC} from 'react';
import {ReactQueryDevtools} from 'react-query/devtools';
import {WithErrorBoundary} from '../HOC/WithErrorBoundary';
import {useQuery, useQueryClient} from 'react-query';
import ky from 'ky';

const Random: FC = () => {
    return (
        <>
            <div>something wrong..</div>
        </>
    );
};

const Basicquery = () => {
    const [postId, setPostId] = React.useState(-1);

    return (
        <WithErrorBoundary FallbackComponent={Random}>
            <p>
                As you visit the posts below, you will notice them in a loading state
                the first time you load them. However, after you return to this list and
                click on any posts you have already visited again, you will see them
                load instantly and background refresh right before your eyes!{' '}
                <strong>
                    (You may need to throttle your network speed to simulate longer
                    loading sequences)
                </strong>
            </p>
            {postId > -1 ? (
                <Post postId={postId} setPostId={setPostId}/>
            ) : (
                <Posts setPostId={setPostId}/>
            )}
            <ReactQueryDevtools initialIsOpen/>
        </WithErrorBoundary>
    );
};

function usePosts() {
    return useQuery('posts', async () => {
        const response = await ky.get('https://jsonplaceholder.typicode.com/posts');
        return response.json();
    });
}

function Posts({setPostId}) {
    const queryClient = useQueryClient();
    const {status, data, error, isFetching} = usePosts();

    return (
        <div>
            <h1>Posts</h1>
            <div>
                {status === 'loading' ? (
                    'Loading...'
                ) : status === 'error' ? (
                    <span>Error: {error.message}</span>
                ) : (
                    <>
                        <div>
                            {data.map((post) => (
                                <p key={post.id}>
                                    <a
                                        onClick={() => setPostId(post.id)}
                                        href="#"
                                        style={
                                            // We can access the query data here to show bold links for
                                            // ones that are cached
                                            queryClient.getQueryData(['post', post.id])
                                                ? {
                                                    fontWeight: 'bold',
                                                    color: 'green',
                                                }
                                                : {}
                                        }
                                    >
                                        {post.title}
                                    </a>
                                </p>
                            ))}
                        </div>
                        <div>{isFetching ? 'Background Updating...' : ' '}</div>
                    </>
                )}
            </div>
        </div>
    );
}

const getPostById = async (id) => {
    const response = await ky.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    return response.json();
};

function usePost(postId) {
    return useQuery(['post', postId], () => getPostById(postId), {
        enabled: !!postId,
    });
}

function Post({postId, setPostId}) {
    const {status, data, error, isFetching} = usePost(postId);

    return (
        <div>
            <div>
                <a onClick={() => setPostId(-1)} href="#">
                    Back
                </a>
            </div>
            {!postId || status === 'loading' ? (
                'Loading...'
            ) : status === 'error' ? (
                <span>Error: {error.message}</span>
            ) : (
                <>
                    <h1>{data.title}</h1>
                    <div>
                        <p>{data.body}</p>
                    </div>
                    <div>{isFetching ? 'Background Updating...' : ' '}</div>
                </>
            )}
        </div>
    );
}

export default Basicquery;
