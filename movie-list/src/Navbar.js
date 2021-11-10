import React,{useState} from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './index.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    return (
        <>
            <nav className="navbar">
                <div className='nav-center'>
                    <div className='nav-header'>
                        <IconButton onClick={openSidebar}>
                            <DehazeIcon />
                        </IconButton>
                    </div>
                    <div className='links-container'>
                        <h3>Entertainment World</h3>
                    </div>
                </div>
            </nav>

            <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
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
                        <Link to='/colorbox'>Color Box</Link>
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default Navbar
