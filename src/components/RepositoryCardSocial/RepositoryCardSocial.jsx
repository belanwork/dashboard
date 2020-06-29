import React from 'react'
import s from './RepositoryCardSocial.module.css'

export const RepositoryCardSocial = props => {
    const { avatar_url, login, html_url } = props.socialRes
    return (
        <table className={s.componentContainer}>
            <tbody>
                <tr>
                    <td width="50%">
                        <img src={`${avatar_url}&size=200`} alt="avatar" className={s.avatarImg} />
                    </td>
                    <td width="50%">
                        <a href={html_url} className={s.link} target="_blank" rel="noopener noreferrer">
                            {login}
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}