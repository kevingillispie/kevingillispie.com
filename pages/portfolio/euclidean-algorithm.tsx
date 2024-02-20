'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Script from 'next/script';
import { PaletteMode } from '@mui/material';
import NavBar from '@/app/components/navigation/navbar';
import '@/app/styles/euclids-prism.css'

export default function BasicTextFields() {
    const [mode] = React.useState<PaletteMode>('dark');
    const formAction = '#default-is-prevented.lolz';
    const titleStyle = {
        opacity: 0
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-start pt-16 lg:p-16">
            <NavBar mode={mode} />
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
                action={formAction}
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField id="m" name="m" label="Integer m:" variant="outlined" />
                <TextField id="outlined-basic" label="Integer n:" variant="outlined" />
                <Button variant="contained" size="large" id='submit'>
                    Get GCD
                </Button>
            </Box>
            <Box>
                <div id="visual">
                    <pre className="bg-stone-950">
                        <code className="d-inline-block w-100 language-javascript">do {'{'}</code>
                        <code className="d-inline-block w-100 language-javascript">   r = m % n;</code>
                        <code className="d-inline-block w-100 language-javascript">   if (r == 0) {'{'}</code>
                        <code className="d-inline-block w-100 language-javascript">       return gcd;</code>
                        <code className="d-inline-block w-100 language-javascript">   {'}'} else {'{'}</code>
                        <code className="d-inline-block w-100 language-javascript">       m = n;</code>
                        <code className="d-inline-block w-100 language-javascript">       n = r;</code>
                        <code className="d-inline-block w-100 language-javascript">   {'}'}</code>
                        <code className="d-inline-block w-100 language-javascript">{'}'} while (r {'>'} 0);</code>
                    </pre>
                </div>
            </Box>
            <div id="tsparticles"></div>
            <Script src="https://cdn.jsdelivr.net/npm/tsparticles-preset-confetti@2/tsparticles.preset.confetti.bundle.min.js"></Script>
            <Script src='/js/euclidean.js'></Script>
            <Script src='/js/euclids-prism.js'></Script>
        </main>
    );
}