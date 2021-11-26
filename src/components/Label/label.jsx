import React from "react";
import PropTypes from "prop-types";
import "./label.scss";

Label.propTypes = {
  children: PropTypes.string,
};

function Label(props) {
  const { children } = props;
  return <div className='label'>{children}</div>;
}

export default Label;
