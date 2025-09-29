
import React from 'react'

export function Button({ variant = 'default', className = '', children, ...props }) {
  const base = 'px-3 py-2 rounded-md border text-sm'
  const styles = {
    default: 'bg-black text-white border-gray-900',
    secondary: 'bg-white text-black border-gray-300',
    destructive: 'bg-red-600 text-white border-red-700',
  }
  return (
    <button className={`${base} ${styles[variant] || styles.default} ${className}`} {...props}>
      {children}
    </button>
  )
}
