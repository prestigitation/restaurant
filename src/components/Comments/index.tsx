import { useCallback, useMemo, useState } from 'react'

import comment_user from '../../img/comment_user.png'

import './index.scss'
import Switcher from './Switcher'

interface PageComment {
    comment: string,
    imageLink: string,
    name: string,
    title: string
}

function Comments() {
    const [commentIndex, setCommentIndex] = useState(0)
    const comments: PageComment[] = [
        {
            comment: 'Я надолго запомню мой День рождения, проведённый в этом ресторане! Кусочек родной Армении!!! Отдельное спасибо за комплепент в виде фруктовой тарелки. Будем рекомендовать этот ресторан своим друзьям и родственникам также за рубежом, путешествующих в Санкт-Петербург!!!',
            imageLink: comment_user,
            name: 'Николай',
            title: 'Посетитель'
        },
        {
            comment: 'Я надолго запомню мой День рождения, проведённый в этом ресторане! Кусочек родной Армении!!! Отдельное спасибо за комплепент в виде фруктовой тарелки. Будем рекомендовать этот ресторан своим друзьям и родственникам также за рубежом, путешествующих в Санкт-Петербург!!!',
            imageLink: comment_user,
            name: 'Николай',
            title: 'Посетитель'
        },
        {
            comment: 'Я надолго запомню мой День рождения, проведённый в этом ресторане! Кусочек родной Армении!!! Отдельное спасибо за комплепент в виде фруктовой тарелки. Будем рекомендовать этот ресторан своим друзьям и родственникам также за рубежом, путешествующих в Санкт-Петербург!!!',
            imageLink: comment_user,
            name: 'Николай',
            title: 'Посетитель'
        }
    ]

    const currentComment = useMemo(() => comments[commentIndex], [commentIndex, comments])
    const setComment = (number: number) => setCommentIndex(number)
    return (
        <div className="comments">
            <div className="comment__text">
                {currentComment.comment}
            </div>
            <div className="comment__image">
                <img className="comment__image-inner" src={currentComment.imageLink} alt="user_image" />
            </div>
            <div className="comment__title">
                {currentComment.title}
            </div>
            <div className="comment__name">
                {currentComment.name}
            </div>
            <div className="comment__switcher">
                {comments.map((comment, index) => 
                    <Switcher 
                        isActive={index === commentIndex} index={index} 
                        onCommentChange={setComment}
                    />)
                }
            </div>
        </div>
    )
}

export default Comments