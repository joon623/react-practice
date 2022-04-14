import React from 'react';
import {useQuery} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import ky from 'ky';

const Squery = () => {
    const {isLoading, error, data, isFetching} = useQuery('repoData', () =>
        ky
            .get('https://api.github.com/repos/tannerlinsley/react-query')
            .then((res) => res.json()),
    );

    console.log('render');
    console.log(data);
    console.log(data?.name);

    return (
        <>
            <div>
                <h1>{data?.name}</h1>
                <p>{data?.description}</p>
                <strong>👀 {data?.subscribers_count}</strong>{' '}
                <strong>✨ {data?.stargazers_count}</strong>{' '}
                <strong>🍴 {data?.forks_count}</strong>
                <div>{isFetching ? 'Updating...' : ''}</div>
                <ReactQueryDevtools initialIsOpen/>
            </div>
        </>
    );
};

export default Squery;
