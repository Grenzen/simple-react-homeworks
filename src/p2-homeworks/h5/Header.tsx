import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from './Routes'
import { Hamburger } from './components/Hamburger/Hamburger'
import s from './Header.module.css'

function Header() {
    const [open, setOpen] = useState<boolean>(false)
    const resetOpen = () => setOpen(false)
    const modeMenu = open ? s.menuOpen : s.menuClose
    return (
        <div>
            <div className={ `${ s.menu } ${ modeMenu }` }>
                <NavLink className={ s.link } to={ PATH.PRE_JUNIOR } onClick={ resetOpen }>Pre Junior</NavLink>
                <NavLink className={ s.link } to={ PATH.JUNIOR } onClick={ resetOpen }>Junior</NavLink>
                <NavLink className={ s.link } to={ PATH.JUNIOR_PLUS } onClick={ resetOpen }>Junior Plus</NavLink>
            </div>
            <Hamburger open={ open } setOpen={ setOpen }/>
        </div>
    )
}

export default Header
