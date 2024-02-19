import type { Metadata } from 'next'
import '@/app/styles/globals.css'
import '@/app/styles/home.css'
import Script from 'next/script'

const bodyClass = 'stop objectifying me'

export const metadata: Metadata = {
    title: 'Kevin Gillispie, Web & Software Developer',
    description: 'Full-stack web and software developer',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en-US">
            <body className={bodyClass}>
                {children}
            </body>
            <Script
                src='/js/page-animations.js'
                className='layout-animations'
            />
        </html>
    )
}
