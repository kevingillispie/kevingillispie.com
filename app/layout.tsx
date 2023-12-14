import Navigation from "./components/navigation/navbar"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './home.css'
import Text3dWeb from "./components/text-3d-web"

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
                {/* <Text3dWeb /> */}
                {children}
            </body>
        </html>
    )
}
