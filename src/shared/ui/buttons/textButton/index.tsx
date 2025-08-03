import { FC } from 'react'
import style from './index.module.css'

interface TextButtonProps {
	text: string
	onClick?: () => void
}

const TextButton: FC<TextButtonProps> = ({ text, onClick }) => {
	return (
		<button className={style.button} onClick={onClick}>
			{text}
		</button>
	)
}

export default TextButton
