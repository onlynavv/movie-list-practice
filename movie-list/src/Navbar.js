import React,{useState} from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './index.css'
import { Link } from 'react-router-dom'
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useTheme} from '@mui/material/styles';
import { useGlobalContext } from './context';
import Typography from '@mui/material/Typography';
import MuiAppBar from '@mui/material/AppBar';
// import Drawer from '@mui/material/Drawer';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const {toggleColorMode} = useGlobalContext()

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const theme = useTheme();
    return (
        <>
            <MuiAppBar className="navbar">
                <div className='nav-center'>
                    <div className='nav-header'>
                        <IconButton onClick={openSidebar}>
                            <DehazeIcon />
                        </IconButton>
                    </div>
                    <Typography className='links-container'>
                        {theme.palette.mode} mode
                        <IconButton onClick={toggleColorMode}>
                            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                        <h3>Entertainment World</h3>
                    </Typography>
                </div>
            </MuiAppBar>

            <aside variant="persistent" className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
                <div className='sidebar-header'>
                    <IconButton className='close-btn' onClick={closeSidebar}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <ul className='links'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/movielist'>Movie List</Link>
                    </li>
                    <li>
                        <Link to='/addmovies'>Add Movies</Link>
                    </li>
                    <li>
                        <Link to='/colorbox'>Color Box</Link>
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default Navbar
