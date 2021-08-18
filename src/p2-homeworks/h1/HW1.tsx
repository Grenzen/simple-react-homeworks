import React from 'react'
import { Message } from './Message'
import s from '../../p1-main/m1-ui/u1-app/App.module.css'

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <h2 className={ s.hwTitle }>homework 1</h2>

            {/*should work (должно работать)*/ }

            <Message
                avatar={ messageData.avatar }
                name={ messageData.name }
                message={ messageData.message }
                time={ messageData.time }
            />
        </div>
    )
}

export default HW1
