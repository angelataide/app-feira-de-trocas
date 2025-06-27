import React from 'react';

const ShieldIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "48"}
    height={props.height || "48"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={props.strokeWidth || "1.5"}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

export default ShieldIcon;