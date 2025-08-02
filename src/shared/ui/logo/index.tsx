import Image from 'next/image'
import { FC } from 'react'
import style from './index.module.css'

interface LogoProps {
	withType?: boolean
}

const Logo: FC<LogoProps> = ({ withType = true }) => {
	return (
		<div className={style.logo}>
			<Image
				src={'/yesim_circle.svg'}
				alt='Logo'
				width={30}
				height={30}
			/>
			{withType && (
				<Image
					src={'/yesim_type.svg'}
					alt='Logo'
					width={65}
					height={23}
				/>
			)}
		</div>
	)
}

export default Logo
