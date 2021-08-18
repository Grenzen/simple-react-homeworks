import React, { useState } from 'react'
import { v1 } from 'uuid'
import GreetingContainer from './GreetingContainer'
import s from '../../p1-main/m1-ui/u1-app/App.module.css'

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        setUsers(() => [...users, { _id: v1(), name: name }])
    }

    return (
        <div>
            <h2 className={ s.hwTitle }>homework 3</h2>
            <GreetingContainer users={ users } addUserCallback={ addUserCallback }/>
        </div>
    )
}

export default HW3
