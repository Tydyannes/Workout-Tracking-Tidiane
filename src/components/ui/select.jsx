
import React from 'react'

export function Select({ value, onValueChange, children }) {
  // very small controlled select mimic
  return <div data-select>{children}</div>
}

export function SelectTrigger({ children, className = '', ...props }) {
  return <div className={`border rounded-md p-2 ${className}`} {...props}>{children}</div>
}

export function SelectValue({ placeholder }) {
  return <span className="text-gray-500">{placeholder}</span>
}

export function SelectContent({ children }) {
  return <div className="mt-2 border rounded-md p-2 bg-white">{children}</div>
}

export function SelectItem({ value, children, onClick }) {
  return (
    <div
      className="px-2 py-1 hover:bg-gray-100 cursor-pointer rounded"
      onClick={() => onClick?.(value)}
    >
      {children}
    </div>
  )
}
