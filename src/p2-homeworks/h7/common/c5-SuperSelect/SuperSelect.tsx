import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    },
) => {
    const mappedOptions: any[] = options ? options.map((option, id) => (
        <option value={ option } key={ `${ option }-${ id }` }>{ option }</option>
    )) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // изменить в дальнейшем передаваемый аргумент?
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select className={ s.superSelect } onChange={ onChangeCallback } { ...restProps }>
            { mappedOptions }
        </select>
    )
}

export default SuperSelect
