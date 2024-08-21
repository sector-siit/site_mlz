import React from 'react'

type ChevronIconProps = {
  color?: string
}

export default function ChevronIcon({ color = '#236999' }: ChevronIconProps) {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z" fill={color}></path>
    </svg>

  )
}
