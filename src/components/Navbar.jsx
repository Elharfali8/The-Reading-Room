import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { navLinks } from '../utils/data'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'

const Navbar = ({navIsOpen, handleNav}) => {
  return (
      <nav className='h-20 w-full grid place-items-center shadow-lg primary-bg-color'>
          <div className="container mx-auto px-4 lg:px-2 xl:px-1 flex justify-between items-center">
              <Link to='/'>
                  <img src={logo} alt="logo main-logo " className='w-full max-w-[140px]' />
              </Link>
              <ul className='hidden lg:flex items-center gap-x-1'>
                  {navLinks.map((link) => {
                      const { id, title, path } = link
                      return (
                          <li key={id} className=''>
                              <NavLink to={path} className='text-lg xl:text-xl tracking-wider poppins-medium text-white transition-all ease-in-out duration-150 hover:text-[#FF6F61] px-3 py-1'>
                                  {title}
                              </NavLink>
                          </li>
                      )
                })}
              </ul>
              <div className='hidden lg:flex lg:items-center gap-x-2'>
                  <button type='button' className='px-4 py-1 text-lg text-white tracking-wider poppins-medium accent-bg-color rounded-lg transition-all ease-in-out duration-150 hover:shadow-xl '>Login</button>
                  <button type='button' className='px-4 py-1 text-lg text-white tracking-wider poppins-medium border border-white rounded-lg transition-all ease-in-out duration-150 hover:bg-white hover:text-[#FF6F61]'>Sign Up</button>
              </div>
              <div className='grid lg:hidden place-items-center'>
                  {navIsOpen ? (
                      <button type='button' onClick={handleNav}>
                      <FaTimes size={27} color='white' />
                  </button>
                  ): (
                    <button type='button' onClick={handleNav}>
                    <FaBars size={27} color='white' />
                </button>
                  )}
                  
              </div>
          </div>
    </nav>
  )
}

export default Navbar