import React from "react";
import PropTypes from "prop-types";
import "./header.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

Header.propTypes = {};

function Header(props) {
  return (
    <div className='header'>
      <div className='header_navbar'>
        <div className='header_navbar--logo'>VINH HOANG</div>

        <div className='header_navbar--menu'>
          <a href='#'>Equioment</a>
          <a href='#'>About us</a>
          <a href='#'>Blog</a>
        </div>

        <div className='header_navbar--account'>
          <AccountCircleOutlinedIcon />
          Account
        </div>
      </div>
    </div>
  );
}

export default Header;
