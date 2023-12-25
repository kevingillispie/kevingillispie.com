import TopNav from "@/app/components/navigation/top-nav"
import RecipeReviewCard from '@/app/components/portfolio/complex-card'
import '@/app/styles/globals.css'
import '@/app/styles/portfolio.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const MultiActionAreaCard = () => {
    return (
        <Card sx={{ maxWidth: 345, padding: 5 }} elevation={24}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="90"
                    image="https://schemascalpel.com/wp-content/themes/schema-scalpel-child/svg/schema-scalpel-logo.svg"
                    alt="Schema Scalpel WP Plugin Logo"
                />
                <CardContent>
                    <Typography gutterBottom variant="h3" component="h3" className="font-bold text-xl">
                        Schema Scalpel
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
}

const codeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-code-slash mx-1" viewBox="0 0 16 16"><path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"></path></svg>';

export default function Portfolio() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start pt-16 lg:p-16">
            <TopNav />
            <Typography mb={2} variant="h3" component="h2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-code-slash mx-1" viewBox="0 0 16 16"><path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"></path></svg>
                Portfolio of Programming Projects
            </Typography>
            <MultiActionAreaCard />
            <RecipeReviewCard />
        </main>
    )
}