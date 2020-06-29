import React from 'react';
import { RepositoryRowTrending } from '../RepositoryRow/RepositoryRowTrending';
import { Article } from '../Article/Article';

export const RepositoryTrendingList = props => {
  const { array } = props
    return (
      <table>
        <thead>
          <tr>
            <th colSpan="4">
              <Article articleString={`Trending results`}/>
            </th>
          </tr>
          <tr>
            <th>Repository</th>
            <th>Total stars</th>
            <th>Stars today</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {array.map((v, i) => <RepositoryRowTrending value={v} key={i} />)}
        </tbody>
      </table>
    )
}
