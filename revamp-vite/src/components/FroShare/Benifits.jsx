/* eslint-disable react/display-name */
import React from "react";
import BenifitsSM from "./BenifitsSM";

const Benifits = React.memo(() => {
  return (
    <>
      <div className="sm:hidden lg:flex xl:flex min-[280px]:hidden justify-evenly items-center w-full h-auto flex flex-col bg-black relative">
        <div className="text-white font-Gilroy font-bold text-5xl pt-10">
          Benefits of Using Froshare
        </div>
        <div className="font-Gilroy font-medium mt-4 md:text-xl lg:text-2xl text-white pt-3">
          Effortless Affiliate Marketing!!
        </div>
        <img
          src={'https://res.cloudinary.com/dapbrn8a9/image/upload/v1723809681/Group_1171277362_2_l4ck0j.webp'}
          alt="Benefits of Using Froshare"
          className="w-full p-10"
          loading="lazy"
        />
      </div>
      <div className="flex lg:hidden w-full justify-center items-center">
        <BenifitsSM />
      </div>
    </>
  );
});

export default Benifits;
