import React from 'react';
import Sidenav from './components/Sidenav';
import Header from './components/Header';
// import data from '../src/messages';
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
// const data = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}];

const headerTitle = 'Header Title Custom';
const sidenavTitle = 'sidenav Title Custom';

const sidenavContent = [
  {id: 1, label: 'label1'},
  {id: 2, label: 'label2'}
];

function App() {
  return (
    <div className="App">
      <Header 
        title={headerTitle}
      />
      <Sidenav
        title={sidenavTitle}
        content={sidenavContent}
      />
    </div>
  );
}

export default App;
