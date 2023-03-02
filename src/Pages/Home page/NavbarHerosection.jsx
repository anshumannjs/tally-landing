import React from 'react'
import { Button } from 'flowbite-react';
import { Navbar } from 'flowbite-react';
import img from '../../Glassball (1).png'
import img3 from '../tally.png'

import img2 from './pngfind.com-call-png-3044605.png'

export default function NavbarHerosection() {
  return (
    <div className='bg'>
        <Navbar className='glassEffect'>
        <React.Fragment key=".0">
          <Navbar.Brand href="https://glassball.app/" className=''>
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
                <div className="flex justify-center space-x-3 text-2xl mx-auto font-bold text-[#001B41] title">
                  <h1 className='my-auto'>
                  Your
                  </h1>
                  <img src={img3} alt="" className='h-20'/>
                  <h1 className='my-auto'>
                  Labeled  - Faster & quicker
                  </h1>
                </div>
                    <p className="py-6 mx-auto text-black text-3xl w-full">Agencies & CA's who used Glassball Software - save <b>40% of Analysts Time</b></p>
                    <img src={img2} alt="" className='mx-auto mt-3' />
                </div>
            </div>
    </div>
  )
}
