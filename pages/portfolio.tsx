import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Script from 'next/script';
import NavBar from '@/app/components/navigation/navbar';
import MultiActionAreaCard from '@/app/components/portfolio/mutli-action-card';
import '@/app/styles/globals.css'
import '@/app/styles/portfolio.css'

export default function MediaCover() {
    const titleStyle = {
        opacity: 0
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-start pt-16 lg:p-16">
            <NavBar />
            <Typography
                variant="h2"
                component="h1"
                className="flex flex-row my-6"
            >
                <span className="page-title" style={titleStyle}>PORTFOLIO of Programming Projects</span>
            </Typography>
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    px: 0,
                }}
            >
                <MultiActionAreaCard />
            </Box>

            <Script
                src='/js/page-animations.js'
                defer
            />
        </main>
    );
}