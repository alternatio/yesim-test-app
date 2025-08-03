import Image from 'next/image'
import { FC } from 'react'

const ChevronIcon: FC = () => {
    return (
        <Image src={'/chevron-icon.svg'} alt='Chevron' width={7} height={12} />
    )
}

export default ChevronIcon
