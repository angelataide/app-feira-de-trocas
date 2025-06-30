import React from 'react'

const MessageIcon = (props) => (
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
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
)

export default MessageIcon
