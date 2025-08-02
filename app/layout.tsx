import type { Metadata } from 'next'
import './fonts.css'
import './globals.css'

export const metadata: Metadata = {
	title: 'Yesim',
	description: 'eSIM карты с интернетом для путешествий и бизнеса'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body>{children}</body>
		</html>
	)
}
