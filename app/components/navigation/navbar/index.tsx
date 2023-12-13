import Button from '@mui/material/Button'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import ButtonGroup from '@mui/material/ButtonGroup';

function Navbar() {

    return (
        <nav className='fixed w-full flex justify-center p-1'>
            <ButtonGroup className='rounded-xl shadow-lg shadow-slate-400/20 dark:shadow-none' aria-label="button group">
                <Button
                    id="__home_btn"
                    aria-haspopup='false'
                    href='/'
                    // size='large'
                    className='pl-5 pr-4 bg-gradient-to-b from-zinc-200 dark:bg-zinc-800/30 dark:from-inherit backdrop-blur-2xl rounded-xl'
                // className='bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:py-4 lg:px-6 lg:dark:bg-zinc-800/30'
                >
                    <CottageOutlinedIcon fontSize='small' />
                </Button>
                <Button
                    id="__blog_btn"
                    aria-haspopup='false'
                    href='/blog'
                    // size='large'
                    className='bg-gradient-to-b from-zinc-200 dark:bg-zinc-800/30 dark:from-inherit backdrop-blur-2xl'
                // className='bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:py-4 lg:px-6 lg:dark:bg-zinc-800/30'
                >
                    Blog
                </Button>
                <Button
                    id="__portfolio_btn"
                    aria-haspopup='false'
                    href='/portfolio'
                    // size='large'
                    className='bg-gradient-to-b from-zinc-200 dark:bg-zinc-800/30 dark:from-inherit backdrop-blur-2xl rounded-xl'
                // className='bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:py-4 lg:px-6 lg:dark:bg-zinc-800/30'
                >
                    Portfolio
                </Button>
            </ButtonGroup>
        </nav>
    );
};

export default Navbar;