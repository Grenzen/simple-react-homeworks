import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    },
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label className={ s.radioLabel } key={ name + '-' + i }>
            <input
                type={ 'radio' }
                checked={ o === value }
                value={ o }
                onChange={ onChangeCallback }
                name={ name }
            />
            <div className={ s.radioText }>{ o }</div>
        </label>
    )) : []

    return (
        <div className={ s.superRadioContainer }>
            { mappedOptions }
        </div>
    )
}

export default SuperRadio
