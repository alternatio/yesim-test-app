'use client'

import ChevronIcon from '@/src/shared/ui/icons/chevron'
import { FC } from 'react'
import { CountryI } from '../model/country'
import style from './index.module.css'

interface CountryCardProps {
    country: CountryI
    onClick?: () => void
}

const CountryCard: FC<CountryCardProps> = ({ country, onClick }) => {
    return (
        <button onClick={onClick} className={style.card}>
            <div className={style.content}>
                <div className={style.flagWrapper}>
                    {/* TODO: flag */}
                </div>
                <div className={style.info}>
                    <span className={style.title}>{country.country}</span>
                    <span className={style.price}>{country.classic_info?.price_per_gb + ' ₽/ГБ'}</span>
                </div>
            </div>
            <ChevronIcon />
        </button>
    )
}

export default CountryCard
