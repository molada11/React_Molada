import React from 'react';

const NavbarToggle = ({ onClick, isOpen }) => {
  return (
    <div className={`navbar-toggle ${isOpen ? 'opened' : ''}`} onClick={onClick}>
      <div className="navbar-toggle-icon"></div>
    </div>
  );
};

export default NavbarToggle;
