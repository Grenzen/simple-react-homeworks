import React, { useState, ChangeEvent, KeyboardEvent } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void // need to fix any
}

// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => {
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target
        setName(() => input.value)
        if (!name.trim().length) setError(() => '')
    }

    const addUser = () => {
        if (name.trim().length) {
            addUserCallback(name.trim())
            alert(`Hello, ${ name.trim() }!`)
            setName(() => '')
        } else {
            setError('The name must contain at least one letter')
            setName(() => '')
        }

    }

    const onKeyPressCallback = (e: KeyboardEvent) => {
        if (e.key === 'Enter') addUser()
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={ name }
            setNameCallback={ setNameCallback }
            onKeyPressCallback={ onKeyPressCallback }
            addUser={ addUser }
            error={ error }
            totalUsers={ totalUsers }
        />
    )
}

export default GreetingContainer
