'use client'
import React, { useState } from 'react'
import Navbar from './Navbar'
import MenuIcon from './MenuIcon';

function NavWrapper() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
    <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default NavWrapper