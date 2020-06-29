import React from 'react';
import s from './Paginator.module.css'
import { NavLink, useParams, useHistory } from 'react-router-dom';

export const Paginator = props => {
  const { page, value } = useParams()
  const { totalCount } = props
  const startPage = parseInt(page / 10) * 10 + 1
  const totalPages = Math.round(totalCount / 10)
  const stepArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


  const pageArray = stepArray.map((stepValue, i) => {
    const newPage = stepValue + startPage
    const boolPage = newPage <= totalPages
    return (
      <NavLink
        key={`${value}${i}`}
        to={boolPage ? `/search/${value}/${newPage}` : ''}>
        {boolPage ? newPage : ''}
      </NavLink>
    )
  })
  const history = useHistory()
  const goBack = () => {
    const checkerValue = +page - 10
    const backValue = checkerValue <= 0 ? 1 : checkerValue
    return history.push(`/search/${value}/${backValue}`)
  }

  const goForward = () => {
    const checkerValue = +page + 10
    const forwardValue = checkerValue <= totalPages ? checkerValue : totalPages
    return history.push(`/search/${value}/${forwardValue}`)
  }
  return (
    <div className={s.componentContainer}>
      <div className={s.arrowLeft} onClick={goBack}></div>
      {pageArray}
      <div className={s.arrowRight} onClick={goForward}></div>
    </div>
  )
}