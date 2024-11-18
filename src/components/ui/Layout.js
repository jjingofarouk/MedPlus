import React from 'react';
import './Layout.css'; // Ensure you have styles defined for layout
import NavBar from "./NavBar";


const Layout = ({ children }) => {
  return (
    <div className="layout">
            <NavBar />

      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default Layout;
