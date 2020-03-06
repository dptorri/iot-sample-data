import React from 'react';
import './sidenav.scss';

function Sidenav( props ) {
  let content = props.content;
  const title = props.title;

  return (
    <div className="sidenav">
        <span>{ title ? title : 'Sidenav content' }</span>
        <h4>Overview</h4>
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