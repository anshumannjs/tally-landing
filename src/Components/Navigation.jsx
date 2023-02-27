import React from 'react';
import { Button } from 'flowbite-react';
import { Navbar } from 'flowbite-react';

export default function Navigation(props) {
  return (
    <div className="w-full">
      <Navbar className='bg-base-200'>
        <React.Fragment key=".0">
          <Navbar.Brand href="https://flowbite.com/" className=''>
            <img
              alt="Flowbite Logo"
              className="mr-3 h-6 sm:h-9"
              src="https://flowbite.com/docs/images/logo.svg"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Saasimi
            </span>
          </Navbar.Brand>
          <div className="flex gap-3 md:order-2">
            <Button color={'gray'} pill={true}>
              Log in
            </Button>
            <Button color={'dark'} pill={true}>
              Get started
            </Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link
              active
              href="/navbars"
            >
              Product
            </Navbar.Link>
            <Navbar.Link href="/navbars">
              Pricing
            </Navbar.Link>
            <Navbar.Link href="/navbars">
              Company
            </Navbar.Link>
            <Navbar.Link href="/navbars">
              Resources
            </Navbar.Link>
            <Navbar.Link href="/navbars">
              Contact
            </Navbar.Link>
          </Navbar.Collapse>
        </React.Fragment>
      </Navbar>
    </div>
  )
}
