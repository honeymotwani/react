import React from 'react'

function Header({count}) {
  return (
    <header>
    Logo
      <div className='count'>{count}</div>
  </header>
  )
}

export default Header
