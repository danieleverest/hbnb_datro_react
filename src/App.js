import React from 'react';
// import Landing1 from './components/layout/Landing1';
// import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';

// import './App.css';
import './index.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      {/* <Landing /> */}
      {/* <Landing1 /> */}
    </React.Fragment>
  );
}

export default App;

