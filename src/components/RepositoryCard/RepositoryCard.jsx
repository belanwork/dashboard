import React from 'react';
import { useContext } from 'react';
import { store } from '../../store/store';
import { useEffect } from 'react';
import { getFromApi } from '../../utilities/getFromApi';
import { useParams } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import s from './RepositoryCard.module.css'
import { RepositoryCardHeader } from '../RepositoryCardHeader/RepositoryCardHeader';
import { RepositoryCardSocial } from '../RepositoryCardSocial/RepositoryCardSocial';
import { RepositoryCardLanguages } from '../RepositoryCardLanguages/RepositoryCardLanguages';
import { RepositoryCardContributors } from '../RepositoryCardContributors/RepositoryCardContributors';
import { RepositoryCardDescription } from '../RepositoryCardDescription/RepositoryCardDescription';

export const RepositoryCard = props => {
    const { state, dispatch } = useContext(store);
    const { author, name } = useParams()
    const { repoResult } = state
    useEffect(() => {
        getFromApi({ type: 'GET_REPO', author, name })
            .then(res => dispatch({ type: 'SET_REPO', value: res }))
        return () => {
            return dispatch({ type: 'SET_REPO', value: null })
        }
    }, [])


    if (!repoResult) return <Loading />
    const [ headerRes, languagesRes, contributorsRes ] = repoResult

    return (
        <div className={s.componentContainer}>
            <RepositoryCardHeader headerRes={headerRes} />
            <RepositoryCardSocial socialRes={headerRes.owner} />
            <RepositoryCardLanguages languagesRes={languagesRes} />
            <RepositoryCardDescription description={headerRes.description} />
            <RepositoryCardContributors contributorsRes={contributorsRes} />
        </div>
    )
}