import { FC } from 'react'
import { steps } from '../model/steps'
import style from './index.module.css'

const HowItsWork: FC = () => {
	return (
		<div className={style.card}>
			<h2 className={style.title}>Как это работает</h2>
			<div className={style.steps}>
				{steps.map((step) => {
					return (
						<div key={step.title} className={style.step}>
							<h3 className={style.stepTitle}>
								{step.title}
							</h3>
							<div className={style.stepImage} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default HowItsWork
