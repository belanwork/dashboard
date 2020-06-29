import React from 'react'

export const RepositoryCardContributors = props => {
    const { contributorsRes } = props
    const sliceArray = !(contributorsRes.length) ? [] : contributorsRes.slice(0,10)
    const tdWidth = 100/sliceArray.length
    const getContributors = array => {
        const contributorsArray = sliceArray.map((v, i) => {
            return <Contributor value={v} key={`contributor ${i}`} tdWidth={tdWidth}/>
        })
        return contributorsArray
    }
    const contributors = getContributors(sliceArray)
    return (
        <table >
            <tbody>
                <tr>
                    <th colSpan={`${sliceArray.length}`}>Contributors</th>
                </tr>
                <tr>
                    {!contributors.length ? <td>No contributors found</td> : contributors}
                </tr>
            </tbody>
        </table>
    )
}

const Contributor = props => {
    const { login } = props.value
    const { tdWidth } = props
    return (
        <td width={`${tdWidth}%`}>
            {login}
        </td>
    )
}