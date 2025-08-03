'use client'

import ChevronIcon from '@/src/shared/ui/icons/chevron'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { CountryI } from '../model/country'
import style from './index.module.css'

interface CountryCardProps {
    country: CountryI
}

const CountryCard: FC<CountryCardProps> = ({ country }) => {
    if (country.url) {
        const href = country.url;
        return (
            <Link href={href} className={style.card}>
                <div className={style.content}>
                    <div className={style.flagWrapper}>
                        <Image src={`/flags/${country.iso?.toLowerCase()}.svg`} alt={country.iso ?? 'country iso'} width={32} height={32} />
                    </div>
                    <div className={style.info}>
                        <span className={style.title}>{country.country}</span>
                        <span className={style.price}>
                            {country.classic_info?.price_per_gb + ' ₽/ГБ'}
                        </span>
                    </div>
                </div>
                <ChevronIcon />
            </Link>
        )
    } else {
        return null
    }
}

export default CountryCard
