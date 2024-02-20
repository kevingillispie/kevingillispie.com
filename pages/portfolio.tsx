import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
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
                <span className="page-title" style={titleStyle}>Portfolio of Programming Projects</span>
            </Typography>

            <MultiActionAreaCard />
            
            <Script
                src='/js/page-animations.js'
                defer
            />
        </main>
    );
}