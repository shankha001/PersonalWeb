import React from 'react';
import './navbar.styles.scss';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FlareIcon from '@material-ui/icons/Flare';
import WorkIcon from '@material-ui/icons/WorkOutlineOutlined';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendarOutlined';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="sidebar__container">
      <div className="sidebar__nav">
        <div className="sidebar__nav-icon">
          <Link to="/home">
            <HomeIcon fontSize="large" />
          </Link>
        </div>
        <div className="sidebar__nav-icon">
          <Link to="/about">
            <PersonOutlineIcon fontSize="large" />
          </Link>
        </div>
        <div className="sidebar__nav-icon">
          <Link to="/skills">
            <FlareIcon fontSize="large" />
          </Link>
        </div>
        <div className="sidebar__nav-icon">
          <Link to="/experience">
            <WorkIcon fontSize="large" />
          </Link>
        </div>
        <div className="sidebar__nav-icon">
          <Link to="/contact">
            <PermContactCalendarIcon fontSize="large" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
