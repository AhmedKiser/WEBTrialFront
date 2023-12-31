"use client";
import CustomButton from "../components/CustomButton";
import {
  BsChevronDown,
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsMedium,
  BsYoutube,
} from "react-icons/bs";
import { CountUp } from "use-count-up";

const Hero = () => {
  return (
    <div className="h-[64.4375rem] relative">
      {/* Banner */}
      <div className="h-[55.5rem] flex flex-col items-start justify-center -mt-[5%]">
        {/* Welcome Text */}
        <h1 className="w-[37.25rem] h-[8.625rem] font-bold text-[3rem] leading-[4.3125rem] p-[0.625rem]">
          WELCOME TO NSU’S ACM STUDENT CHAPTER
        </h1>

        {/* Buttons */}
        <div className="flex gap-[1.5625rem] mt-[5.4375rem] mb-[9.25rem]">
          <CustomButton text="Join Now" type="primary" />
          <CustomButton text="Explore Event" type="secondary" />
        </div>

        {/* Counters */}
        <div className="flex gap-[4.375rem]">
          <div>
            <h1 className="text-[2.25rem] font-bold">
              <CountUp isCounting end={30} duration={2} easing={"linear"} />+
            </h1>
            <p className="text-[0.875rem]">workshops</p>
          </div>
          <div>
            <h1 className="text-[2.25rem] font-bold">
              <CountUp isCounting end={13} duration={2} easing={"linear"} />+
            </h1>
            <p className="text-[0.875rem]">events</p>
          </div>
          <div>
            <h1 className="text-[2.25rem] font-bold">
              <CountUp isCounting end={15} duration={2} easing={"linear"} />
            </h1>
            <p className="text-[0.875rem]">seminars</p>
          </div>
          <div>
            <h1 className="text-[2.25rem] font-bold">
              <CountUp isCounting end={3} duration={2} easing={"linear"} />
            </h1>
            <p className="text-[0.875rem]">publications</p>
          </div>
        </div>
      </div>
      

      {/* Social Media Icons */}
      {/* <div className="absolute bottom-[20%] right-0 flex flex-col gap-8 text-5xl">
        <BsFacebook />
        <BsLinkedin />
        <BsGithub />
        <BsYoutube />
        <BsMedium />
      </div> */}


      <div className="absolute bottom-[20%] right-0 flex flex-col gap-8 text-5xl">
        {/* Facebook Link */}
        <a
          href="https://www.facebook.com/nsuacmsc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://bd.linkedin.com/company/nsuacmsc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/NSU-ACM-SC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        

        {/* YouTube Link */}
        <a
          href="https://www.youtube.com/@nsuacmstudentchapter4819"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsYoutube />
        </a>

        {/* <BsMedium /> */}
      </div>

      {/* Down Arrow */}
      <a href="#about">
        <button className="flex items-center justify-center text-3xl font-bold w-full mb-[3.875rem]">
          <BsChevronDown />
        </button>
      </a>
    </div>
  );
};
export default Hero;
