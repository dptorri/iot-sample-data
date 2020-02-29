import React from 'react';
import './sidenav.css';

function Sidenav( props ) {
  let content = props.content;
  const title = props.title;

  return (
    <div className="sidenav">
        <span>{ title ? title : 'Sidenav content' }</span>
        <ul>
          {content.map((i) => 
            <li key={i.id}>
              {i.label}
            </li>
          )}
        </ul>
    </div>
  );
}

export default Sidenav;