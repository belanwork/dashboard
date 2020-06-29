import React from 'react'

export const RepositoryCardHeader = props => {
    const { name , stargazers_count, pushed_at } = props.headerRes
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
    return (
        <table>
            <tbody>
                <tr>
                    <th width="50%">Repository name</th>
                    <td width="50%">{name}</td>
                </tr>
                <tr>
                    <th width="50%">Stars count</th>
                    <td width="50%">{stargazers_count}</td>
                </tr>
                <tr>
                    <th width="50%">Last commit</th>
                    <td width="50%">{getDate(pushed_at)}</td>
                </tr>
            </tbody>
        </table>
    )
}
