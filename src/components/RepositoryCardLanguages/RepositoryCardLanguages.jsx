import React from 'react'

export const RepositoryCardLanguages = props => {
    const { languagesRes } = props
    const getLanguages = obj => {
        const tdWidth = 100/Object.keys(obj).length
        const languagesArray = []
        for (let value in obj) {
            languagesArray.push(<Language languageName={value} key={`lan ${value}`} tdWidth={tdWidth}/>)
        }
        return languagesArray
    }

    const languages = getLanguages(languagesRes)
    return (
        <table>
            <tbody>
                <tr>
                    <th colSpan={`${languages.length}`}>Languages used in project</th>
                </tr>
                <tr>
                    { !languages.length ? <td>No languages found</td> : languages}
                </tr>
            </tbody>
        </table>
    )
}

const Language = props => {
    const { languageName, tdWidth } = props
    return (
        <td width={`${tdWidth}%`}>
            {languageName}
        </td>
    )
}