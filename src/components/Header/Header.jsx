import React from 'react';
import s from './Header.module.css'
import { SearchBox } from '../SearchBox/SearchBox';

export const Header = props => {
  return (
    <div className={s.componentContainer}>
      <div className={s.wrapper}>
        <SearchBox />
        <div className={s.article}>
          Dashboard Project by belanWork
        </div>
      </div>
    </div>
  )
}
