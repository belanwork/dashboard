import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export const Article = props => {
    const { articleString } = props
    const { value } = useParams()
    const [article, setArticle] = useState(
        {
            string: '',
            index: 0,
            isCompleted: false
        }
    )
    const { string, index, isCompleted } = article
    useEffect(() => {
        if (!isCompleted) {
            const newString = string + articleString[index]
            const newIndex = index + 1
            setTimeout(() => {
                setArticle({
                    string: newString,
                    index: newIndex,
                    isCompleted: newString.length === articleString.length
                })
            }, 50)
        }
    }, [string])

    useEffect(() => {
        setArticle({
            string: '',
            index: 0,
            isCompleted: false
        })
    }, [value])

    return (
        <span className="article">
            {string}
            <span className="blink">|</span>
        </span>
    )
}
