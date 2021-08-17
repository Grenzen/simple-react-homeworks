import React from 'react'
import s from './Message.module.css'

type MessageProps = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message: React.FC<MessageProps> = ({ avatar, name, message, time }) => {
    return (
        <div
            className={ s.messageContainer }>
            <div
                className={s.avatar}
                style={{backgroundImage: `url(${ avatar })`}}>
            </div>
            <div className={ s.dataContainer }>
                <div className={ s.textContainer }>
                    <span className={ s.userName }>{ name }</span>
                    <p className={ s.userMessage }>{ message }</p>
                </div>
                <span className={ s.date }>{ time }</span>
            </div>

        </div>
    )
}
