import React from 'react'
import HW5 from '../../../p2-homeworks/h5/HW5'
import s from './App.module.css'

function App() {
    return (
        <div className={s.App}>
            <div className={s.AppTitleContainer}><h1 className={s.AppTitle}>React homeworks:</h1></div>
            <HW5/>
        </div>
    )
}

export default App
