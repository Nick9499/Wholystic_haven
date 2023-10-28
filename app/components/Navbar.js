"use client";

import { Button, Navbar } from "flowbite-react";
import logo from "../The_logo.jpeg";

export default function NavbarWithCTAButton() {
  return (
    <Navbar className="sticky top-0" fluid rounded>
      <Navbar.Brand href="/">
        <img
          src={logo.src}
          className="mr-3 h-20 md:h-28 sm:h-9"
          alt="Wholystic Haven"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Start Here
        </Navbar.Link>
        <Navbar.Link href="#">Our Story</Navbar.Link>
        <Navbar.Link href="#">Our Services</Navbar.Link>
        <Navbar.Link href="#">Our Process</Navbar.Link>
        <Navbar.Link href="/fees">Our Fees</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
