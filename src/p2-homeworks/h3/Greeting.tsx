import React, { ChangeEvent, KeyboardEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPressCallback: (e: KeyboardEvent) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers, onKeyPressCallback },
) => {
    const inputClass = error.length ? s.errorInput : s.normalInput

    return (
        <div className={ s.container }>
            <div>
                <input
                    value={ name }
                    onKeyPress={ onKeyPressCallback }
                    onChange={ setNameCallback }
                    className={ `${ inputClass } ${ s.commonInput }` }
                />
                <button
                    className={ s.button }
                    onClick={ addUser }
                >
                    add
                </button>
                <span className={ s.errorMessage }> { error }</span>
                <span className={ s.gap }>Members count: { totalUsers }</span>
            </div>
        </div>
    )
}

export default Greeting
