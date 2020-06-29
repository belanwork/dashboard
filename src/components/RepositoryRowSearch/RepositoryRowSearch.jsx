import React from 'react';
import { useHistory } from 'react-router-dom';

export const RepositoryRowSearch = props => {
    const { name,stargazers_count,html_url,full_name,pushed_at } = props.value
    const getDate = date => {
        const conversionToDate = new Date(date)
        const options = {
            hour: 'numeric',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        return conversionToDate.toLocaleString("en-US", options)
    }
    const history = useHistory()
    const goToRepo = () => {
        history.push(`/repos/${full_name}`)
    }
    return (
        <tr>
            <td onClick={goToRepo} colSpan="3" className="link">{name}</td>
            <td colSpan="3">{stargazers_count}</td>
            <td colSpan="3">{getDate(pushed_at)}</td>
            <td colSpan="3">
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                    {`/${full_name}`}
                </a>
            </td>
        </tr>
    )
}