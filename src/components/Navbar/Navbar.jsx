import React from 'react';
import './navbar.styles.scss';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FlareIcon from '@material-ui/icons/Flare';
import WorkIcon from '@material-ui/icons/WorkOutlineOutlined';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendarOutlined';
function Navbar() {
  return (
    <div className="sidebar__container">
      <div className="sidebar__nav">
        <div className="sidebar__nav-icon">
          <HomeIcon fontSize="large" />
        </div>
        <div className="sidebar__nav-icon">
          <PersonOutlineIcon fontSize="large" />
        </div>
        <div className="sidebar__nav-icon">
          <FlareIcon fontSize="large" />
        </div>
        <div className="sidebar__nav-icon">
          <WorkIcon fontSize="large" />
        </div>
        <div className="sidebar__nav-icon">
          <PermContactCalendarIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
