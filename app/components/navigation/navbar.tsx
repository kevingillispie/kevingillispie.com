import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ButtonGroup from '@mui/material/ButtonGroup';
import { PaletteMode } from '@mui/material';
import Link from 'next/link';
import DrawerMobileNavigation from './hamburger-menu';

const logoStyle = {
    width: 'auto',
    height: 'auto',
    cursor: 'pointer',
};

const logoProps = {
    w: 35,
    h: 35
}

interface NavBarProps {
    mode: PaletteMode;
}

function NavBar({ mode }: NavBarProps) {

    const devNameStyle = {
        opacity: 0
    }

    return (
        <div className=''>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: 2,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={() => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderRadius: '999px',
                            bgcolor:
                                mode === 'dark'
                                    ? 'rgba(0, 0, 0, 0.4)'
                                    : '',
                            backdropFilter: 'blur(24px)',
                            maxHeight: 40,
                            border: '1px solid white',
                            borderColor: 'divider',
                        })}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                ml: '-18px',
                                px: 0,
                            }}
                        >
                            <ButtonGroup variant="text" aria-label="text button group">
                                <Link href={'/'} className='nav-hover-effect'>
                                    <Button variant="text" className='home-btn-devname lg:pt-3 lg:px-5 lg:pb-3 lg:static lg:w-auto rounded-full text-trans-initial dark:text-slate-200 text-lg' style={devNameStyle}>
                                        <div className='font-transducer-hairline kevin flex flex-row'>KEVIN</div>
                                        <div className='font-transducer-bold gillispie flex flex-row'>GILLISPIE</div>
                                    </Button>
                                </Link>
                            </ButtonGroup>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                mr: '-18px',
                                px: 0,
                            }}
                        >
                            <ButtonGroup variant="text" aria-label="text button group">
                                <DrawerMobileNavigation />
                            </ButtonGroup>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default NavBar;
