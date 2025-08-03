'use client'

import { FC, useCallback, useRef, useState } from 'react'
import { steps } from '../model/steps'
import style from './index.module.css'

const HowItsWork: FC = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null)
	const [isDragging, setIsDragging] = useState(false)
	const [startX, setStartX] = useState(0)
	const [scrollLeft, setScrollLeft] = useState(0)

	// For mouse
	// click
	const handleMouseDown = useCallback((e: React.MouseEvent) => {
		if (!scrollContainerRef.current) return

		setIsDragging(true)
		setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
		setScrollLeft(scrollContainerRef.current.scrollLeft)

		e.preventDefault()
	}, [])

	// move
	const handleMouseMove = useCallback((e: React.MouseEvent) => {
		if (!isDragging || !scrollContainerRef.current) return

		e.preventDefault()
		const x = e.pageX - scrollContainerRef.current.offsetLeft
		const walk = (x - startX) * 1.2 // Множитель для скорости прокрутки
		scrollContainerRef.current.scrollLeft = scrollLeft - walk
	}, [isDragging, startX, scrollLeft])

	const handleMouseUp = useCallback(() => {
		setIsDragging(false)
	}, [])

	const handleMouseLeave = useCallback(() => {
		setIsDragging(false)
	}, [])

	// For mobile
	// touch
	const handleTouchStart = useCallback((e: React.TouchEvent) => {
		if (!scrollContainerRef.current) return

		setIsDragging(true)
		setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft)
		setScrollLeft(scrollContainerRef.current.scrollLeft)
	}, [])

	// move
	const handleTouchMove = useCallback((e: React.TouchEvent) => {
		if (!isDragging || !scrollContainerRef.current) return

		const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft
		const walk = (x - startX) * 1
		scrollContainerRef.current.scrollLeft = scrollLeft - walk
	}, [isDragging, startX, scrollLeft])

	const handleTouchEnd = useCallback(() => {
		setIsDragging(false)
	}, [])

	return (
		<div className={style.card}>
			<h2 className={style.title}>Как это работает</h2>
			<div
				ref={scrollContainerRef}
				className={`${style.steps} ${isDragging ? style.dragging : ''}`}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseLeave}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			>
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
