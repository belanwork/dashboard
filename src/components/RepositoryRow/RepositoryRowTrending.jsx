import React from 'react';
import { useHistory } from 'react-router-dom';

export const RepositoryRowTrending = props => {
    const { name, stars, url, starsToday, author } = props.value
    const history = useHistory()
    const goToRepo = () => {
        history.push(`/repos/${author}/${name}`)
    }
    return (
        <tr>
            <td onClick={goToRepo} className="link">{name}</td>
            <td>{stars}</td>
            <td>{starsToday}</td>
            <td>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {`/${author}/${name}`}
                </a>
            </td>
        </tr>
    )
}