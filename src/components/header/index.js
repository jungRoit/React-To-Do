import React from 'react';
import './index.css';

const Header = (props) => {

    return (
        <div classsName="header">
            <h1>{props.title}</h1>
        </div>
    )
}

export default Header;