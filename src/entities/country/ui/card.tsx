'use client'

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
            <span className={style.title}>{country.country}</span>
        </button>
    )
}

export default CountryCard
