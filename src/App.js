import React from 'react';
import { hot } from 'react-hot-loader'
import SideBar from 'components/SideBar'
import Index from 'pages/Index'

function App() {
  return (
    <>
      <SideBar />
      <div style={{ marginRight: '60px' }}>
        <Index />
      </div>
    </>
  );
}

export default hot(module)(App);
