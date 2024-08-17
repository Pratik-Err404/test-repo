import React from "react";
import "../../styles/link.css"
import CoreValues from "../../components/About/CoreValues";
const AboutUs = () => {
  return (
    <div id='wholebody'>
      <title>Privacy Policy</title>
      <center style={{ textAlign: 'justify', paddingLeft: '1rem', paddingRight: '1rem' }}>


        <div className='head'>
          <div className="heading">
            <span className="text-white font-semibold text-3xl lg:text-7xl">About us</span>
          </div>
          <center>
            <div className="date">
              <span className="text-white font-semibold text-3xl lg:text-5xl ">
                Welcome To </span>
              <span className="text-red-700 font-semibold text-3xl lg:text-5xl">
                Froker!
              </span>
            </div>
          </center>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="w-[80%] m-4 flex flex-col justify-center items-center border-[1px] border-white shadow-[5px_5px_0_0_#ffffff] shadow-red p-4 rounded-2xl bg-[#C30010] transition-transform duration-300 hover:scale-105 hover:brightness-115">
          <div className="text-3xl text-center font-semibold pb-4 text-white">Company Overview</div>

          <p className="text-white text-center text-xl  ">
           Arroz Technology Private Limited, the parent company of Froker, is committed to revolutionizing digital marketing. Our mission is to democratize affiliate marketing through a gamified social media platform, making it more accessible and engaging for everyone. We aim to empower individuals and brands by fostering an inclusive, dynamic community where creators and consumers can thrive together.
          </p>

        </div>
        <div className="w-[80%] m-4 flex flex-col justify-center items-center border-[1px] border-white shadow-[5px_5px_0_0_#ffffff] shadow-red p-4 rounded-2xl bg-[#C30010] transition-transform duration-300 hover:scale-105 hover:brightness-115">
          <div className="text-3xl font-semibold pb-4 text-white">Our Vision</div>

          <p className="text-white text-center text-xl">
          To empower individuals and brands by creating an inclusive, dynamic, gamified social media platform that transforms affiliate marketing. Froker envisions a world where everyone, regardless of background, can benefit from digital marketing. By integrating gamification, we make affiliate marketing fun, engaging, and accessible, fostering a global community where creators and consumers thrive together.
          </p>

        </div>
        </div>
        <div className="pb-10">
        <CoreValues />
        </div>
        
      </center>
    </div>
  );
};

export default AboutUs
