
import React from 'react'

export function Tabs({ value, onValueChange, children }) {
  return <div>{children}</div>
}

export function TabsList({ className = '', children }) {
  return <div className={`flex gap-2 ${className}`}>{children}</div>
}

export function TabsTrigger({ value, children, onClick, className = '' }) {
  return (
    <button
      className={`px-3 py-2 border rounded-md ${className}`}
      onClick={onClick || (() => {})}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, className = '', children }) {
  return <div className={className}>{children}</div>
}
