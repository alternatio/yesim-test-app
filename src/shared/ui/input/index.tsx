import { FC, HTMLInputTypeAttribute, ReactNode } from 'react'
import style from './index.module.css'

interface InputProps {
	type?: HTMLInputTypeAttribute
	name?: string
	value?: string
	placeholder?: string
	prefix?: ReactNode
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({
	type,
	name,
	value,
	placeholder,
	prefix,
	onChange
}) => {
	return (
		<label className={style.label}>
			{prefix}
			<input
				className={style.input}
				type={type}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</label>
	)
}

export default Input
