import TopNav from "@/app/components/navigation/top-nav"
import MultiActionAreaCard from "@/app/components/portfolio/mutli-action-card"
import Typography from '@mui/material/Typography'
import '@/app/styles/globals.css'
import '@/app/styles/portfolio.css'

export default function Portfolio() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start pt-16 lg:p-16">
            <TopNav />
            <Typography mb={2} variant="h2" component="h2" className="flex flex-row mt-6">
                <span>Portfolio of Programming Projects</span>
            </Typography>
            <div className="container">
                <MultiActionAreaCard />
            </div>
        </main>
    )
}