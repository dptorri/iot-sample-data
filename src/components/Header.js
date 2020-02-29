import React from 'react';
import './header.css';

function Header( props ) {
    const title = props.title;
  return (
    <div className="header">
        <span>{title ?
                title
                : 
                'Header content'
                }
        </span>
    </div>
  );
}

export default Header;