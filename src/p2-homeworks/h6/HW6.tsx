import React, { useState } from 'react'
import { SuperEditableSpan } from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { restoreState, saveState } from './localStorage/localStorage'
import d from '../../p1-main/m1-ui/u1-app/App.module.css'
import s from './HW6.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', value))
    }

    return (
        <>
            <h2 className={ d.hwTitle }>homework 6</h2>
            <div className={ s.hw6Container }>
                <div>
                    <SuperEditableSpan
                        value={ value }
                        onChangeText={ setValue }
                        iconClassName={ s.editIcon }
                        spanProps={ { children: value ? value : 'enter text...', className: s.superSpan } }
                    />
                </div>
                <div>
                    <SuperButton onClick={ save }>save</SuperButton>
                    <SuperButton onClick={ restore }>restore</SuperButton>
                </div>
            </div>
        </>
    )
}

export default HW6
