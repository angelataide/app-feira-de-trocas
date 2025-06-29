import React from 'react'

const UserPlusIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || '48'}
        height={props.height || '48'}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={props.strokeWidth || '1.5'}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <line x1="20" y1="8" x2="20" y2="14"></line>
        <line x1="23" y1="11" x2="17" y2="11"></line>
    </svg>
)

export default UserPlusIcon
