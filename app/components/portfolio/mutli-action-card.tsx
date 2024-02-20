import * as React from 'react';
import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Image from 'next/image';

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
        let props = {
            title: p[0],
            desc: p[1],
            link: p[2],
            src: p[3],
            alt: p[4],
            width: p[5],
            height: p[6]
        }
        pCards.push(
            // <Grid item xs={12} md={6} key={i}>
            //     <Card sx={{ flexGrow: 1 }} className='p-6'>
            //         <CardActionArea>
            //             <CardMedia
            //                 component="img"
            //                 height={p[5]}
            //                 image={p[3]}
            //                 alt={p[4]}
            //             />
            //             <CardContent>
            //                 <Typography gutterBottom variant="h3" component="h3">
            //                     {p[0]}
            //                 </Typography>
            //                 <Typography variant="body2" color="text.secondary">
            //                     {p[1]}
            //                 </Typography>
            //             </CardContent>
            //         </CardActionArea>
            //         <CardActions>
            //             <Button size="small" color="primary">
            //                 Share
            //             </Button>
            //         </CardActions>
            //     </Card>
            // </Grid>
            <Box
                component="ul"
                sx={{ display: 'flex', flexWrap: 'wrap', p: 0, m: '0 auto 20px' }}
                key={i}
            >
                <Card component="li" sx={{ minWidth: 300, flexGrow: 1, width: props.width }}>
                    <CardCover>
                        <Image
                            src={props.src.toString()}
                            width={parseInt(props.width.toString())}
                            height={parseInt(props.height.toString())}
                            loading="lazy"
                            alt={props.alt.toString()}
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
                            {props.title}
                        </Typography>
                        <Typography
                            variant="body1"
                        >
                            {props.desc}
                        </Typography>
                    </CardContent>
                </Card>
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