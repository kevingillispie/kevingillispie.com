import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
    const project = [
        [
            'Schema Scalpel',
            'A WordPress plug for customizing your website\'s microdata.',
            'https://schemascalpel.com/',
            'https://schemascalpel.com/wp-content/themes/schema-scalpel-child/svg/schema-scalpel-logo.svg',
            'Schema Scalpel WP Plugin Logo',
            '90'
        ],
        [
            'Euclidean Algorithm',
            'An algorithmic solution to finding the GCD of two positive integers.',
            '/portfolio',
            'https://kevingillispie.com/wp-content/uploads/2023/11/euclidean-algorithm.jpg',
            'Euclidean Algorithm, Euclid portrait.',
            '90'
        ],
        [
            'Blackjack',
            'A simple card game to demonstrate an effective use of randomization.   ',
            '/portfolio',
            'https://kevingillispie.com/wp-content/uploads/2023/03/cards-splayed-500.jpg',
            'Playing cards piled, Jack of Spades showing.',
            '90'
        ],
    ]

    const pCards = new Array();

    project.forEach((p, i) => {
        pCards.push(
            <Grid item xs={12} md={6} key={i}>
                <Card sx={{ flexGrow: 1 }} className='p-6'>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height={p[5]}
                            image={p[3]}
                            alt={p[4]}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="h3">
                                {p[0]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {p[1]}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    })

    return (
        <Grid container spacing={2}>
            {pCards}
        </Grid>
    )
}