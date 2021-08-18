import React, { useState } from 'react'
import { Affairs } from './Affairs/Affairs'
import s from './HW2.module.css'
import d from '../../p1-main/m1-ui/u1-app/App.module.css'

// types
export type AffairPriorityType = 'high' | 'middle' | 'low'
export type FilterType = 'all' | AffairPriorityType
export type AffairType = {
    _id: number
    name: string
    priority: string
}

// constants
const defaultAffairs: Array<AffairType> = [
    { _id: 1, name: 'React', priority: 'high' },
    { _id: 2, name: 'anime', priority: 'low' },
    { _id: 3, name: 'games', priority: 'low' },
    { _id: 4, name: 'work', priority: 'high' },
    { _id: 5, name: 'html & css', priority: 'middle' },
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    switch (filter) {
        case 'all':
            return affairs
            break
        default:
            return affairs.filter(affair => affair.priority === filter)

    }
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter(affair => affair._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <>
            <h2 className={ d.hwTitle }>homework 2</h2>
            <div className={ s.hwContainer }>
                <Affairs
                    data={ filteredAffairs }
                    setFilter={ setFilter }
                    deleteAffairCallback={ deleteAffairCallback }
                />
            </div>
        </>
    )
}

export default HW2
