import React from 'react';
import './dashboard.css';

const axios = require('axios');
 
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


  
function Dashboard( props ) {
  //let content = props.content;
// const sector_list = [
//     {}
// ];
  return (
    <div>
        <div className="container-data">
            <h4>Sector 1</h4>
            <ul>
                <li>Mean: 0</li> 
                <li>Median: 0</li> 
                <li>Min: 0</li> 
                <li>Max: 0</li> 
            </ul>
        </div>
    </div>
  );
}

export default Dashboard;