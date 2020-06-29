import React from 'react';
import s from './App.module.css';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { MainRoute } from './components/MainRoute/MainRoute';
import { StateProvider } from './store/store';



export const App = props => {
  return (
    <div className={s.componentContainer}>
      <BrowserRouter>
        <StateProvider>
          <header>
            <Header/>
          </header>
          <main>
            <MainRoute />
          </main>
        </StateProvider>
      </BrowserRouter>
    </div>
  )
}
