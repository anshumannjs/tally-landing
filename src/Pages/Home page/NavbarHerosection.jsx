import React from 'react'
import { Button } from 'flowbite-react';
import { Navbar } from 'flowbite-react';
import img from '../../Glassball (1).png'
import img2 from './pngfind.com-call-png-3044605.png'

export default function NavbarHerosection() {
  return (
    <div className='bg'>
        <Navbar className='glassEffect'>
        <React.Fragment key=".0">
          <Navbar.Brand href="https://flowbite.com/" className=''>
            <img
              alt="Glassball Logo"
              className="mr-3 h-10 sm:h-20"
              src={img}
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Glass Ball
            </span>
          </Navbar.Brand>
          <div className="flex gap-3 md:order-2">
            {/* <Button color={'gray'} pill={true}>
              Log in
            </Button> */}
            <Button color={'dark'} pill={true}>
              Get activation code
            </Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link
              active
              href="/navbars"
              className='text-[#001B41]'
            >
              Home
            </Navbar.Link>
            <Navbar.Link href="/navbars" className='text-[#001B41]'>
            Features
            </Navbar.Link>
            <Navbar.Link href="/navbars" className='text-[#001B41]'>
            Pricing
            </Navbar.Link>
            <Navbar.Link href="/navbars" className='text-[#001B41]'>
            Blog
            </Navbar.Link>
            <Navbar.Link href="/navbars" className='text-[#001B41]'>
            Contact
            </Navbar.Link>
          </Navbar.Collapse>
        </React.Fragment>
      </Navbar>

      <div className="hero-content text-center">
                <div className="max-w-6xl">
                    <h1 className="text-5xl font-bold w-[100%] text-[#001B41]">Next-gen Saas tool that boosts your marketing and sales</h1>
                    <p className="py-6 w-[50%] mx-auto text-black">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    {/* <div className="relative w-[50%] mx-auto">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div> */}
                    <img src={img2} alt="" className='mx-auto mt-3' />
                </div>
            </div>
    </div>
  )
}
