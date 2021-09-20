import React, { useMemo, useState } from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(() => new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(() => true)
    }
    const onMouseLeave = () => {
        setShow(() => false)
    }

    const addZero = ({ item }: { item: number }): string => `0${ item }`
    const compareDate = date.getDate()
    const stringDate = useMemo(() => {
        return {
            today: date.getDate() < 10
                ? addZero({ item: date.getDate() })
                : date.getDate(),
            month: date.getMonth() + 1 < 10
                ? addZero({ item: date.getMonth() + 1 })
                : date.getMonth() + 1,
            year: date.getFullYear(),
        }
    }, [compareDate])

    const stringTime = `${ date.getHours() < 10
        ? addZero({ item: date.getHours() })
        : date.getHours() }:${ date.getMinutes() < 10
        ? addZero({ item: date.getMinutes() })
        : date.getMinutes() }:${ date.getSeconds() < 10
        ? addZero({ item: date.getSeconds() })
        : date.getSeconds() }
    `
    return (
        <div className={ s.clockContainer }>
            <div
                onMouseEnter={ onMouseEnter }
                onMouseLeave={ onMouseLeave }
            >
                { stringTime }
            </div>

            <div className={ s.stringDate }>
                { show && `${ stringDate.today }.${ stringDate.month }.${ stringDate.year }` }
            </div>

            <div>
                <SuperButton onClick={ start }>start</SuperButton>
                <SuperButton onClick={ stop }>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
