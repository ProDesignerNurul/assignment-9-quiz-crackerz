import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import headImageOne from '../../images/headImageOne.jpg';

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
                <div>
                    <img src={headImageOne} alt="" />
                </div>
                <div className='sub-header-info'>
                    <h1>Welcome To Our Quiz Website</h1>
                    <h4>Hi Thare!!! it's a Quiz Releted Website, Do You Like Quizes? If Yes, Please Visit This Website and Prectice Some Quizes!!! Thank You!!!</h4>
                </div>
            </div>
        </div>
    );
};

export default Header;