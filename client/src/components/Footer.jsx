import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f3f6fa]">
      <div className="w-[85%] flex flex-wrap mx-auto border-b py-16 md-lg:pb-10 sm:pb-6">
        <div className="w-3/12 lg:w-4/12 sm:w-full">
          <div className="flex flex-col gap-3">
            <img
              className="w-[190px] h-[70px]"
              src="http://localhost:3000/images/agro-logo.png"
              alt=""
            />
            <ul className="flex flex-col gap-2 text-slate-600">
              <li>Address : Rangpur, Kurigram</li>
              <li>Phone : 01781737438</li>
              <li>Email : jaidmonwar.edu@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="w-5/12 lg:w-8/12 sm:2-full">
          <div className="flex justify-center sm:justify-start sm:mt-6 w-full">
            <div>
              <h2 className="font-bold text-lg mb-2">Useful links</h2>
              <div className="flex justify-between gap-[80px] lg:gap-[40px]">
                <ul className="flex flex-col gap-2 text-slate-600 text-sm">
                  <li>
                    <Link>About Us</Link>
                  </li>
                  <li>
                    <Link>About our shop</Link>
                  </li>
                  <li>
                    <Link>Delivery Information</Link>
                  </li>
                  <li>
                    <Link>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link>Blogs</Link>
                  </li>
                </ul>
                <ul className="flex flex-col gap-2 text-slate-600 text-sm">
                  <li>
                    <Link>Who we are</Link>
                  </li>
                  <li>
                    <Link>Our Service</Link>
                  </li>
                  <li>
                    <Link>Projects</Link>
                  </li>
                  <li>
                    <Link>Contact</Link>
                  </li>
                  <li>
                    <Link>Innovation</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/12 lg:w-full lg:mt-6">
          <div className="w-full flex flex-col justify-start gap-5">
            <h2 className="font-bold text-lg mb-2">Join Our Newsletter Now</h2>
            <span>Get E-mail updates about our shop and special offer</span>
            <div className="h-[50px] w-full bg-white border relative">
              <input
                className="h-full w-full px-3 bg-transparent outline-0"
                type="text"
                placeholder="Enter your email"
              />
              <button className="h-full absolute right-0 bg-violet-700 text-white uppercase font-bold text-sm px-4">
                Subscribe
              </button>
            </div>
            <ul className="flex justify-start items-center gap-3">
              <li>
                <a
                  className="w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-white rounded-full"
                  href="#"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  className="w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-white rounded-full"
                  href="#"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a
                  className="w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-white rounded-full"
                  href="#"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  className="w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-white rounded-full"
                  href="#"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[85%] flex flex-wrap justify-center items-center text-slate-600 mx-auto py-5 text-center">
        <span>
          Copyright ©2024 All rights are reserved | made by
          <a className="text-blue-500 underline" href="">
            @jaidmonwar
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
