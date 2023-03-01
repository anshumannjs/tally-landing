import React from 'react';
import { Button } from 'flowbite-react';
import { Navbar } from 'flowbite-react';
import img from '../Glassball (1).png'

export default function Navigation(props) {
  return (
    <div className="w-full">
      <Navbar className='bg-base-200'>
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
    </div>
  )
}
