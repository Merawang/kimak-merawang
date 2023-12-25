import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Switch from '@mui/material/Switch';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LanguageIcon from '@mui/icons-material/Language';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';

import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
    AOS.init();
    AOS.refresh();

    // Handle Dropdown
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Dropdown List
    const navbar = {
        home: {
            value: 'home',
            label: 'Beranda',
            link: ''
        },
        about: {
            value: 'about',
            label: 'Tentang Kimak',
            link: 'about'
        }
    }

    const [change, setChange] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setChange(!change);
        }, 5000);

        return () => clearInterval(interval);
    }, [change])

    return (
        <>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to="/" target='_top' className="flex items-center">
                        <img src="logoKKNpng.png" className="h-10 md:h-12 mr-2" alt="Logo Desa Kimak" />
                        {change && <p className="self-center text-xs md:text-sm font-normal whitespace-normal dark:text-white" data-aos='fade-left'>
                            Membangun <span className="font-semibold">Bangka</span> <br />dari <span className="font-semibold">Desa</span>
                        </p>}
                        {!change && <p className="self-center text-xs md:text-sm font-normal whitespace-normal dark:text-white" data-aos='fade-left'>
                            <span className="font-semibold">Kimak+</span> <br />Portal of Unified System
                        </p>}
                    </NavLink>
                    <div className="flex space-x-2">
                        <button onClick={handleOpen} data-collapse-toggle="navbar-sticky" type="button" className="transition-all inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-emerald-500 rounded-lg md:hidden hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-200 dark:text-emerald-400 dark:hover:bg-emerald-700 dark:focus:ring-emerald-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile */}
                    <Menu
                        anchorEl={anchorEl}
                        elevation={10}
                        id="menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuList>
                            <MenuItem onClick={handleClose}>
                                <NavLink to={navbar.home.link}>
                                    <div className="wrapper w-full flex flex-row space-x-3 items-center justify-between">
                                        <LanguageIcon fontSize='small' className='text-emerald-600' />
                                        <p className='self-end'>{navbar.home.label}</p>
                                    </div>
                                </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <NavLink to={navbar.about.link}>
                                    <div className="wrapper w-full flex flex-row space-x-3 items-center">
                                        <HolidayVillageIcon fontSize='small' className='text-emerald-600' />
                                        <p>{navbar.about.label}</p>
                                    </div>
                                </NavLink>
                            </MenuItem>
                        </MenuList>
                    </Menu>

                    {/* Web */}
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-sticky">
                        <ul className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to={navbar.about.link} className={({ isActive }) => isActive ? "text-emerald-600 transition-all" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-700 md:p-0 md:dark:hover:text-emerald-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}>{navbar.about.label}</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >

        </>
    );
}

export default Navbar;