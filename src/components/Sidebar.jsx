import React from 'react'
import { navLinks } from '../utils/data'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ navIsOpen, handleNav }) => {
    
  return (
      <aside className={`lg:hidden ${navIsOpen ? 'fixed top-20 bottom-0 left-0 right-0 primary-bg-color translate-x-0 z-[99] transition-all ease-in-out duration-150' : 'fixed top-20 bottom-0 left-0 right-0 primary-bg-color translate-x-[-100%] z-[0] transition-all ease-in-out duration-150'}`}>
          <div className='p-8'>
              <ul className='grid gap-y-3 mb-8'>
                  {navLinks.map((link) => {
                      const { id, title, path } = link
                      return (
                          <li key={id}>
                              <NavLink to={path} className='block text-lg pl-2 tracking-wider poppins-medium text-white transition-all ease-in-out duration-150 hover:pl-3 hover:text-[#FF6F61]'>
                                  {title}
                              </NavLink>
                          </li>
                      )
                  })}
              </ul>
              <div className='grid gap-y-2 sm:grid-cols-2 gap-x-2'>
                  <button type='button' className='px-4 py-1 text-lg text-white tracking-wider poppins-medium accent-bg-color rounded-lg transition-all ease-in-out duration-150 hover:shadow-xl '>Login</button>
                  <button type='button' className='px-4 py-1 text-lg text-white tracking-wider poppins-medium border border-white rounded-lg transition-all ease-in-out duration-150 hover:bg-white hover:text-[#FF6F61]'>Sign Up</button>
              </div>
          </div>
    </aside>
  )
}

export default Sidebar