import React from 'react'

export const RepositoryCardDescription = props => {
    const { description } = props
    return (
        <table>
            <tbody>
                <tr>
                    <th>Repository description</th>
                </tr>
                <tr>
                    <td>{description}</td>
                </tr>
            </tbody>
        </table>
    )
}