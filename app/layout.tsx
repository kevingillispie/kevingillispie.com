import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import '@/app/home.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Kevin Gillispie, Web+Software Developer',
    description: 'Full-stack web and software developer',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
