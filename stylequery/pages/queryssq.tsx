import React from 'react';
import {dehydrate, QueryClient} from 'react-query';

const QuerySsq = () => {
    return (
        <>
            <div>s</div>
            {/*<ReactQueryDevtools/>*/}
        </>
    );
};

export default QuerySsq;

export async function getStaticProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['post', 10], () => fetchPost(10));

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}
