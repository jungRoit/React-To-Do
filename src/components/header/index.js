import React from 'react';
import './index.css';
import searchPic from '../../assets/img/search.png';

const Header = (props) => {

    let toggleSearch = () => {
        props.toggleSearch();
    }

    return (
        <div className='header'>
            <h1>{props.title}</h1>
            <div className='clearfix'>
                <img 
                onClick= {() => toggleSearch()}
                className='search-img' 
                src={searchPic} alt='Search' />
            </div>
        </div>
        
    )
}

export default Header;