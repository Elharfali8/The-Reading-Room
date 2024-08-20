import React from 'react'

const Footer = () => {
  return (
      <footer className='py-4 lg:py-6 grid place-items-center text-white primary-bg-color'>
          <p className='sm:text-lg lg:text-xl xl:text-2xl'>&copy; {new Date().getFullYear()} <span className='poppins-medium tracking-wider'>The Reading Room</span>. All rights reserved.</p>
    </footer>
  )
}

export default Footer