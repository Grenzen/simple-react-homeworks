import React from 'react'
import { AffairType } from '../HW2'
import { ReactSVG } from 'react-svg'
import path from '../delete.svg'
import s from './Affair.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

export const Affair:React.FC<AffairPropsType> = ({ affair, deleteAffairCallback }) => {
    const deleteCallback = () => deleteAffairCallback(affair._id)

    return (
        <div className={ s.affairItem }>
            <button className={ s.button } onClick={deleteCallback}><ReactSVG src={ path } /></button>
            <p className={ s.name }>{ affair.name }</p>
            <span className={ `${s.priority} ${s[`${ affair.priority }`]}` }>{ affair.priority }</span>
        </div>
    )
}
