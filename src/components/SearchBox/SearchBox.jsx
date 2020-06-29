import React from 'react';
import s from './SearchBox.module.css'
import { useHistory } from 'react-router-dom';

export const SearchBox = props => {
  const history = useHistory()
  const submit = e => {
    e.preventDefault()
    const { value } = e.target.searchString
    history.push(value ? `/search/${value}/1` : '/')
  }
  return (
    <div className={s.componentContainer}>
      <form onSubmit={submit}>
        <input type="text" id="searchString" className={s.inputString} placeholder="Search..." />
        <input type="submit" value="Submit" className={s.inputSubmit}/>
      </form>
    </div>
  )
}