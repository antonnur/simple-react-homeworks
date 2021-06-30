import React from 'react'
import c from './Message.module.css'

export type MessageType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: MessageType) {
  return (
    <div className={c.message}>
      <div className={c.avatar}>
        <img src={props.avatar}/>
      </div>
      <div className={c.message__popup}>
        <div className={c.message__name}>
          {props.name}
        </div>
        <div className={c.messageWrapper}>
          <div className={c.message__message}>
            {props.message}
          </div>
          <div className={c.message__time}>
            {props.time}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message
