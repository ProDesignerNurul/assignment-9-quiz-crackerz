import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/quizes'>Quizes</Link>
            <Link to='/statistic'>Statistic</Link>
            <Link to='/blogs'>Blogs</Link>
        </div>
    );
};

export default Header;