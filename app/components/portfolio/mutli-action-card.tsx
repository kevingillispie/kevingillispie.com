import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Image from 'next/image';
import Link from 'next/link';

export default function MultiActionAreaCard() {
    const project = [
        [
            'Schema Scalpel',
            'A WordPress plug for customizing your website\'s microdata.',
            'https://schemascalpel.com/',
            'https://schemascalpel.com/wp-content/themes/schema-scalpel-child/svg/schema-scalpel-logo.svg',
            'Schema Scalpel WP Plugin Logo',
            1000,
            336
        ],
        [
            'Euclidean Algorithm',
            'An algorithmic solution to finding the GCD of two positive integers.',
            '/portfolio',
            'https://kevingillispie.com/wp-content/uploads/2023/11/euclidean-algorithm.jpg',
            'Euclidean Algorithm, Euclid portrait.',
            1000,
            398
        ],
        [
            'Blackjack',
            'A simple card game to demonstrate an effective use of randomization.   ',
            '/portfolio',
            'https://kevingillispie.com/wp-content/uploads/2023/03/cards-splayed-500.jpg',
            'Playing cards piled, Jack of Spades showing.',
            1000,
            199
        ],
    ]

    const pCards = new Array();

    project.forEach((p, i) => {
        let projectData = {
            title: p[0],
            desc: p[1],
            link: p[2],
            src: p[3],
            alt: p[4],
            width: p[5],
            height: p[6]
        }
        pCards.push(
            <Box
                component="ul"
                sx={{ display: 'flex', flexWrap: 'wrap', p: 0, m: '0 auto 20px' }}
                key={i}
            >
                <Link href={projectData.link.toString()}>
                    <Card component="li" sx={{ minWidth: 300, flexGrow: 1, width: projectData.width }} >
                        <CardCover>
                            <Image
                                src={projectData.src.toString()}
                                width={parseInt(projectData.width.toString())}
                                height={parseInt(projectData.height.toString())}
                                loading="lazy"
                                alt={projectData.alt.toString()}
                            />
                        </CardCover>
                        <CardCover
                            sx={{
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            }}
                        />
                        <CardContent sx={{ justifyContent: 'flex-end', marginTop: '300px', color: 'white' }}>
                            <Typography
                                variant="h2"
                                component="h2"
                            >
                                {projectData.title}
                            </Typography>
                            <Typography
                                variant="body1"
                            >
                                {projectData.desc}
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
            </Box>
        )
    })

    const containerStyle = {
        margin: '0 auto'
    }

    return (
        <Grid container spacing={6} style={containerStyle} >
            {pCards}
        </Grid>
    )
}