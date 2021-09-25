import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import d from '../../p1-main/m1-ui/u1-app/App.module.css'
import s from './HW10.module.css'
import { useSelector } from 'react-redux'
import { isLoadingSelector } from '../../store/selectors/loading'
import * as loadingActions from '../../store/actions/loading'
import { useAppDispatch } from '../../store'
import { Spin } from 'antd'

function HW10() {
    const isLoading = useSelector(isLoadingSelector)
    const dispatch = useAppDispatch()


    const setLoading = () => {
        dispatch(loadingActions.requestedLoading())
        setTimeout(dispatch, 5000, loadingActions.requestedLoading())
        console.log('loading...')
    }

    return (
        <div>
            <h2 className={ d.hwTitle }>homework 10</h2>

            <div className={ s.hw10Container }>
                { isLoading
                    ? (<Spin size={ 'large' }/>)
                    : (
                        <div>
                            <SuperButton onClick={ setLoading }>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default HW10
