import React from 'react';
import { RepositoryRowSearch } from '../RepositoryRowSearch/RepositoryRowSearch';
import { Article } from '../Article/Article';
import { useParams } from 'react-router-dom';

export const RepositorySearchingList = props => {
  const { items } = props
  const { value } = useParams()
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="12">
            <Article articleString={`Searching results for ${value}`}/>
          </th>
        </tr>
        <tr>
          <th colSpan="3">Repository</th>
          <th colSpan="3">Total stars</th>
          <th colSpan="3">Last commit</th>
          <th colSpan="3">URL</th>
        </tr>
      </thead>
      <tbody>
        {items.map((v, i) => <RepositoryRowSearch value={v} key={i} />)}
      </tbody>
    </table>
  )
}


