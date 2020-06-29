import React, { useEffect, useContext } from 'react';
import { getFromApi } from '../../utilities/getFromApi';
import { store } from '../../store/store';
import { Loading } from '../Loading/Loading';
import { RepositorySearchingList } from '../RepositorySearchingList/RepositorySearchingList';
import { Paginator } from '../Paginator/Paginator';
import { useParams } from 'react-router-dom';

export const SearchPage = props => {
    const { page, value } = useParams()
    const { state, dispatch} = useContext(store);
    const { searchResult } = state
    useEffect(() => {
        getFromApi({ type: 'GET_SEARCH_REPOS', value, page })
            .then(res => dispatch({ type: 'SET_SEARCHING' , value: res}))
    }, [value, page])
    if (!searchResult) {
        return <Loading />
    }
    const { items, total_count } = searchResult
    return (
        <div>
            <RepositorySearchingList items={items} />
            <Paginator totalCount={total_count} />
        </div>
    )
}

