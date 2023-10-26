"use client";
import React from "react";
import { Footer } from "flowbite-react";
import { BsInstagram } from "react-icons/bs";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

const FooterComponent = () => {
  return (
    <Footer container>
      <div className="w-full">
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Wholystic Haven™"
            href="/"
            year={new Date().getFullYear()}
            className="text-center md:text-left"
          />
          <div className="mt-4 flex space-x-6 justify-center ">
            <Footer.Icon
              href="https://www.instagram.com/wholistichavenspeaks/"
              icon={BsInstagram}
              target="_blank"
            />
            <Footer.Icon
              href="tel:561-231-0005"
              icon={FaPhone}
              target="_blank"
            />
            <Footer.Icon
              href="mailto:Cmauricette@wholistichaven.org"
              icon={FaEnvelope}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
