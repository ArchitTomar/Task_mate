import React from 'react'

export const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 w-full'>
      <div className='px-4 mx-auto relative text-sm w-full'>
        <div className='flex justify-between items-center w-full'>
          <div className='flex items-center flex-shrink-0'>
            <span className='text-xl tracking-tight'> TaskMate</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li><a href="#">Feature</a></li>
            <li><a href="#">Workflow</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
          <div className='hidden lg:flex justify-center space-x-12 items-center'>
            <a href="#" className='py-2 px-3 border rounded-md'> Sign In </a>
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create An Account</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
