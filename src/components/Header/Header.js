import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='logo'>
                    <h2>Quiz Rider</h2>
                </div>
                <div className='nav-bar'>
                    <Link to='/quizes'>Quizes</Link>
                    <Link to='/statistic'>Statistic</Link>
                    <Link to='/blogs'>Blogs</Link>
                </div>
            </div>
            <div className='sub-header'>
                <h1>Bangladesh</h1>
                <h2>All-Time Showing This Text</h2>
            </div>
        </div>
    );
};

export default Header;