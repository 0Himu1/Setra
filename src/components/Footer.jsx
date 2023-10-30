import React from 'react';
import { AiFillDribbbleCircle, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import logo from '../images/Logowhite.png';
import BigButton from './ui/BigButton';

export default function Footer() {
  return (
    <div className="bg-dimBlack text-dimWhite">
      <div className="pt-20 pb-10 px-5 bg-dimBlack text-center lg:text-left lg:px-32 md:flex items-center justify-between gap-20">
        <h1 className="font-Aclonica text-4xl font-thin mb-5 ">
          Book a table now
        </h1>
        <p className="font-DMSans text-base mb-10 opacity-70 max-w-xs mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          molestias eum eos sint alias quae quasi officia modi sit architecto?
        </p>
        <BigButton text="reserve a table" normal className="mx-auto lg:ml-auto" />
      </div>
      <div className=" py-16">
        <img src={logo} alt="logo" className="mx-auto" />
      </div>
      <div className="md:flex items-start justify-center gap-32">
        <div className="px-5 mb-12">
          <h3 className="para-1 mb-5">Location</h3>
          <p className="font-DMSans text-base opacity-70 mb-5">
            767 5th Street, 21st Floor,
            {' '}
            <br />
            {' '}
            New York, USA
          </p>
          <div className="flex opacity-70 text-2xl">
            <p className="font-DMSans text-base opacity-70 mb-5 mr-4">
              Follow on:
            </p>
            <div className="flex  text-3xl">
              <AiFillFacebook className="mr-4" />
              <AiFillInstagram className="mr-4" />
              <AiFillDribbbleCircle className="mr-4" />
            </div>
          </div>
        </div>
        <div className="px-5 mb-12">
          <h3 className="para-1 mb-5">Links</h3>
          <div className="font-DMSans text-base opacity-70 flex flex-col font">
            <a href="#about" className="mb-2 hover:text-primary ">
              About Us
            </a>
            <a href="#about" className="mb-2 hover:text-primary ">
              Recipes
            </a>
            <a href="#about" className="mb-2 hover:text-primary ">
              News
            </a>
            <a href="#about" className="mb-2 hover:text-primary ">
              Contact Us
            </a>
          </div>
        </div>
        <div className="px-5">
          <h3 className="para-1 mb-5">Ligal</h3>
          <div className="font-DMSans text-base opacity-70 flex flex-col font">
            <a href="#about" className="mb-2 hover:text-primary ">
              APrivacy Policy
            </a>
            <a href="#about" className="mb-2 hover:text-primary ">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
