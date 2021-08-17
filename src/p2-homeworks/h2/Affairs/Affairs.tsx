import React, {SyntheticEvent} from 'react'
import { Affair } from '../Affair/Affair'
import { AffairType } from '../HW2'
import { FilterType } from '../HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

export const Affairs:React.FC<AffairsPropsType> = ({ data, setFilter, deleteAffairCallback }) => {
    const mappedAffairs = data.map((a: AffairType) => (
        <Affair
            key={ a._id }
            affair={ a }
            deleteAffairCallback={ deleteAffairCallback }
        />
    ))

    const filterHandler = (event: SyntheticEvent): void => {
        const btn = event.target as HTMLElement
        const value  = btn.innerText.toLowerCase() as FilterType
        setFilter(value)
    }

    return (
            <div>
                { mappedAffairs }
                <div className={ s.buttonGroup }>
                    <button className={ s.button } onClick={ filterHandler }>All</button>
                    <button className={ s.button } onClick={ filterHandler }>High</button>
                    <button className={ s.button } onClick={ filterHandler }>Middle</button>
                    <button className={ s.button } onClick={ filterHandler }>Low</button>
                </div>
            </div>
            )
}

