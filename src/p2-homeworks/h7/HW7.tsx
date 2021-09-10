import React, { useState } from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import d from '../../p1-main/m1-ui/u1-app/App.module.css'
import s from './HW7.module.css'

const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[ 1 ])

    return (
        <div>
            <h2 className={ d.hwTitle }>homework 7</h2>
            <div className={ s.hw7Container }>
                <div>
                    <SuperSelect
                        options={ arr }
                        value={ value }
                        onChangeOption={ onChangeOption }
                    />
                </div>
                <SuperRadio
                    name={ 'radio' }
                    options={ arr }
                    value={ value }
                    onChangeOption={ onChangeOption }
                />
            </div>
        </div>
    )
}

export default HW7
