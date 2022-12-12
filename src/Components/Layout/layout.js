import { Outlet } from 'react-router-dom';
import Menu from '../MenuBar/bar';
import './layout.scss';
import React from 'react';

const Layout = () => {
    return (
    <div className='App'> 
        <Menu/> 
        
    <div className='page'>
        
        <Outlet/>

    </div>
    </div>
    )
        
}

export default Layout;