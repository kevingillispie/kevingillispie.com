'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Script from 'next/script';
import { PaletteMode } from '@mui/material';
import NavBar from '@/app/components/navigation/navbar';
import '@/app/styles/globals.css'
import '@/app/styles/euclids-prism.css'
// import '@/app/styles/euclid.css'

interface PageProps {
    mode: PaletteMode;
}

export default function BasicTextFields({mode}: PageProps) {
    const formAction = '#default-is-prevented.lolz';
    const titleStyle = {
        // opacity: 0
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-start pt-16 lg:p-16">
            <NavBar mode={mode}/>
            <Box sx={{ textAlign: 'center', m: 1 }}>
                <Typography
                    variant="h2"
                    component="h1"
                    className="flex flex-row"
                >
                    <span className="page-title my-12" style={titleStyle}>Euclidean Algorithm</span>
                </Typography>
            </Box>
            <Box
                component="form"
                id='form'
                className='flex flex-col'
                action={formAction}
                sx={{
                    '& > :not(button)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField id="m" name="m" label="Integer m:" variant="outlined" className='' />
                <TextField id="n" name='n' label="Integer n:" variant="outlined" />
                <Button variant="contained" size="large" id='submit' className='bg-blue-400' sx={{ m: 1 }}>
                    Get GCD
                </Button>
            </Box>
            <Grid
                container
                spacing={2}
                className='place-content-center border-2 w-1/2 mt-2 flex-nowrap'
            >
                <Box id='visual' className="m-1 w-auto" sx={{ display: 'flex', flexDirection: 'column' }}>
                    <pre className="bg-stone-950">
                        <code className="language-javascript">do {'{'}</code><br />
                        <code className="language-javascript">   r = m % n;</code><br />
                        <code className="language-javascript">   if (r == 0) {'{'}</code><br />
                        <code className="language-javascript">       return gcd;</code><br />
                        <code className="language-javascript">   {'}'} else {'{'}</code><br />
                        <code className="language-javascript">       m = n;</code><br />
                        <code className="language-javascript">       n = r;</code><br />
                        <code className="language-javascript">   {'}'}</code><br />
                        <code className="language-javascript">{'}'} while (r {'>'} 0);</code>
                    </pre>
                </Box>
                <Box className="flex flex-col place-content-center w-full">
                    <div>
                        <Typography
                            variant="h2"
                            component="h2"
                            className="w-full page-title my-12 text-center"
                        >
                            GCD
                        </Typography>
                    </div>
                    <hr />
                    <div id='result'>8</div>
                </Box>
            </Grid>
            <div id="tsparticles"></div>
            <Script
                src='/js/page-animations.js'
                defer
            />
            {/* <Script src="https://cdn.jsdelivr.net/npm/tsparticles-preset-confetti@2/tsparticles.preset.confetti.bundle.min.js"></Script> */}
            <Script src='/js/euclidean.js'></Script>
            <Script src='/js/euclids-prism.js'></Script>
        </main>
    );
}