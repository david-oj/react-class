import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex items-center py-2 px-4 justify-between'>
        <div className='size-8 rounded-full bg-green-500' />
        <p className="text-xl font-semibold">The Header</p>
        <ul >
            <li className='flex gap-4'>
                <Link to="/">Home</Link>
                <Link to="/about-us" >About</Link>
                <Link to="/contact-us">Contact</Link>
                <Link to="/anime">Anime</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header