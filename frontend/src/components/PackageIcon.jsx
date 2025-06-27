import React from 'react';

const PackageIcon = (props) => (
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
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
    <path d="M2.5 14.24v-4.49A2 2 0 0 1 3.5 8h17a2 2 0 0 1 1.5 1.75v4.49"></path>
    <path d="M12 22l-6-3.5"></path>
    <path d="M12 22l6-3.5"></path>
    <path d="M12 22v-7"></path>
    <path d="M22 17.5L12 22L2 17.5"></path>
    <path d="M22 17.5V11L12 6L2 11V17.5"></path>
  </svg>
);

export default PackageIcon;