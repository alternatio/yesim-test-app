import { FC } from 'react'
import HowItsWork from '../../howItWorks/ui'
import style from './index.module.css'
import PopularCountries from './popularCountries'

const MainContent: FC = () => {
    return (
        <main className={style.main}>
            <PopularCountries />
            <HowItsWork />
        </main>
    )
}

export default MainContent
