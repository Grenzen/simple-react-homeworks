import React from 'react'
import s from './Hamburger.module.css'

type HamburgerTypes = {
    open: boolean
    setOpen: (v: boolean) => void
}

export const Hamburger: React.FC<HamburgerTypes> = (
    { open, setOpen }) => {

    const modeContainer = open ? s.burgerContainerOpen : s.burgerContainerClose
    const modeLines = open ? s.burgerLineOpen : s.burgerLineClose
    const toggleOpen = () => setOpen(!open)

    return (
        <button className={ `${ s.burgerContainer } ${ modeContainer }` } onClick={ toggleOpen }>
            <div className={ `${ s.burgerLine } ${ modeLines }` }/>
            <div className={ `${ s.burgerLine } ${ modeLines }` }/>
            <div className={ `${ s.burgerLine } ${ modeLines }` }/>
        </button>
    )
}