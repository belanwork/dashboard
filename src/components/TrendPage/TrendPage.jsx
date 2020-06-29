import React, { useContext, useEffect } from 'react';
import { getFromApi } from '../../utilities/getFromApi';
import { RepositoryTrendingList } from '../RepositoryTrendingList/RepositoryTrendingList';
import { store } from '../../store/store';
import { Loading } from '../Loading/Loading';



export const TrendPage = props => {
    const { state, dispatch } = useContext(store);
    const { trendResult } = state
    useEffect(() => {
        getFromApi({ type: 'GET_TEN_POPULAR_REPOS' })
            .then(res => dispatch({ type: 'SET_TRENDING', value: res }))
    }, [])

    if (!trendResult) return <Loading />
    return (
        <div>
            <RepositoryTrendingList array={trendResult} />
        </div>
    )
}