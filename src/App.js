import React from 'react';
import Sidenav from './components/Sidenav';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css';

/***
 * TODO:
 * 
 *  Clicking on Overview will exchange the content in the middle.
    Clicking on Sectors will simply show/hide the list of sub sectors.
    Clicking on Sector X will exchange the content on the middle
    Header Content should be easily settable
 *
 *
 */

const headerTitle = 'Header Title Custom';
const sidenavTitle = 'sidenav Title Custom';

const sidenavContent = [
  {id: 1, label: 'Sector 1'},
  {id: 2, label: 'Sector 2'},
  {id: 3, label: 'Sector 3'}
];

function App() {
  return (
    <div className="App">
      
      {/* Header */}
      <Header 
        title={headerTitle}
      />
    
      <div className="flex-container">

        {/* Sidenav */}
        <Sidenav
          title={sidenavTitle}
          content={sidenavContent}
        />
        {/* Dashboard */}
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
