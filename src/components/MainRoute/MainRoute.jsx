import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RepositoryCard } from '../RepositoryCard/RepositoryCard';
import { SearchPage } from '../SearchPage/SearchPage';
import { TrendPage } from '../TrendPage/TrendPage';

export const MainRoute = props => {
  return (
    <Switch>
      <Route exact path='/' component={TrendPage} />
      <Route exact path='/search/:value/:page' component={SearchPage} />
      <Route exact path='/repos/:author/:name' component={RepositoryCard}  />
    </Switch>
  )
}