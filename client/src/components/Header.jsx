import React from 'react'
import Logo from './logo'
import Profile from './profile'

const Header = () => {
  return (
    <header className="p-3 flex items-center justify-between bg-foreground border-b-2">
      <Logo lightText={true} />
      <Profile />
    </header>
  )
}

export default Header
