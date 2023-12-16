import Navigation from "./components/navigation/navbar"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './home.css'
import RotatingBox from "./components/rotating-box-logo"

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
                <Navigation />
                <RotatingBox />
                {children}
            </body>
        </html>
    )
}
