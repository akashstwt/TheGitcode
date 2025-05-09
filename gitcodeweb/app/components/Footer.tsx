import React from "react";
import Image from "next/image";

type Props = {};

const PlatformCard: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex items-center justify-center w-[150px] h-[50px] text-[#B5F001]">
      <span className="text-[36px]">{`{`}</span>
      <span className="text-[20px] mx-1 mt-4">{text}</span>
      <span className="text-[36px]">{`}`}</span>
    </div>
  );
};

const Footer = (props: Props) => {
  return (
    <div className="w-full">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center bg-[#B5F001] mb-10 mx-8 md:mx-10 lg:mx-36 h-auto lg:h-36 rounded-lg p-6 lg:px-20 shadow-md">
        <div className="text-black font-medium text-center lg:text-left mb-6 lg:mb-0">
          <p className="text-[24px] md:text-[28px] lg:text-[32px]">Stay Updated with</p>
          <p className="text-[22px] md:text-[26px] lg:text-[30px] font-bold">GitCode-v3!</p>
        </div>
        <a
          href="https://forms.gle/gJgwzeLBjrKXLGy77"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center justify-center bg-black text-white text-[16px] md:text-[18px] font-medium w-[120px] md:w-[150px] h-[50px] md:h-[60px] rounded-full">
            Join us
            <div className="bg-[#B5F001] -rotate-45 ml-4 rounded-full">
              <span className="p-2 text-[20px] md:text-[24px] text-black">→</span>
            </div>
          </button>
        </a>
      </div>

      {/* Main Footer Section */}
      <div className="flex justify-center items-center text-[#B5F001]">
        <div className="w-full max-w-[1356px] bg-black rounded-lg flex flex-col items-center mb-10 px-4 md:px-10 lg:px-20 py-10">
          {/* Heading and Description */}
          <div className="w-full lg:max-w-[1136px] flex flex-col items-center">
            <span className="text-[60px] sm:text-[100px] lg:text-[160px] text-center font-trap">
              We Are-Boost
            </span>
            <span className="text-[16px] md:text-[18px] font-thin mb-8">
              Grow your impact, and be part of a thriving network where every contribution counts.
            </span>
            {/* Email Input */}
            <div className="flex flex-col md:flex-row items-center md:justify-center">
              <input
                type="text"
                placeholder="Your e-mail"
                className="w-full md:w-[380px] h-[50px] bg-black text-[#B5F001] text-[16px] md:text-[18px] font-thin align-middle border-b-2 border-[#B5F001] focus:outline-none focus:ring-0 mb-4 md:mb-0 md:mr-4"
              />
              <Image
                src="/Arrow1.ico"
                alt="Arrow icon"
                width={44}
                height={44}
                className="border-b-2 border-[#B5F001] pb-8 cursor-pointer"
              />
            </div>
          </div>

          {/* Footer Links and Icons */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-between mt-16 space-y-6 lg:space-y-0">
            {/* Contact */}
            <div className="flex flex-row items-center gap-2">
              <Image
                src="/sms.svg"
                alt="sms icon"
                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] m-2 md:m-4"
                width={50}
                height={50}
              />
              <span className="text-[16px] md:text-[18px]">Get in touch</span>
            </div>
            {/* Social Platforms */}
            <div className="flex flex-row gap-4">
              <PlatformCard text="x.com" />
              <PlatformCard text="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;





