import React from 'react';
import banner from "./images/banner.PNG"
import Image from "next/image";
const Content = () => {
  // const handleDownload = () => {
  //   const pdfBlob = new Blob(['PDF content'], { type: 'application/pdf' });
  //   const url = URL.createObjectURL(pdfBlob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = 'example.pdf';
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   URL.revokeObjectURL(url);
  // };
    return (
        <div>


  
        {/* banner */}
        <div className="w-full h-screen">
          <div
            className="bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url('/images/banner.PNG')`,
              backgroundColor: "rgba(0,0,0,0.6)",
              backgroundBlendMode: "soft-light",
            }}
          >
            <div className="pt-[300px] pl-28 pb-24">
              <div className="grid grid-cols-2">
                <div>
                  <h1 className="text-[#4187FF] text-[85px]">NSU ACM Chapter</h1>
                  <h3 className="text-3xl text-[#7A7A7A] pb-8">
                    Working in NSU since 2007
                  </h3>
                  <p className="text-xl text-[#7A7A7A] text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    pretium sit amet magna sed rutrum. Mauris eleifend turpis
                    condimentum arcu suscipit, in egestas felis sodales.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Donec maximus quis tortor a
                    placerat. Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas. Etiam turpis
                    dolor, congue a eros ut, feugiat tincidunt dui.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* about acm */}
        <div className="w-full bg-gradient-to-br from-tahiti-100 to-tahiti-200">
          <div className="py-28 px-28">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-6xl text-[#255FC1] pb-10">About ACM</h3>
                <p className="text-xl text-[#7A7A7A] text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pretium sit amet magna sed rutrum. Mauris eleifend turpis
                  condimentum arcu suscipit, in egestas felis sodales.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Donec maximus quis tortor a
                  placerat. Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames ac turpis egestas. Etiam turpis dolor,
                  congue a eros ut, feugiat tincidunt dui. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Donec porta iaculis neque, feugiat pretium erat
                  vulputate ut.
                </p>
                <button className="bg-[#2F92D0] hover:bg-[#9747FF] w-[13.8125rem] h-[4rem] rounded-full font-semibold text-[1.25rem] mt-[100px]" >
          By Laws
        </button>
              </div>
              <div className="ml-">
                <img src="./images/logo.PNG" className="" alt="" />
                <Image src="/logo.PNG" className="ml-52 w-2/3" width ='500' height= '500' quality={100}></Image>
              </div>
            </div>
          </div>
        </div>
  
        {/* nsuacm sc */}
        <div className="w-full bg-white">
          <div className="py-28 px-28">
            <div>
              <h1 className="text-6xl text-[#4187FF] pb-14">What is NSUACM SC?</h1>
            </div>
            <div className="grid grid-cols-2 gap-12">
              <div className="pr-16">
                <p className="text-xl text-[#7A7A7A] text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pretium sit amet magna sed rutrum. Mauris eleifend turpis
                  condimentum arcu suscipit, in egestas felis sodales.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Donec maximus quis tortor a
                  placerat. Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames ac turpis egestas. Etiam turpis dolor,
                  congue a eros ut, feugiat tincidunt dui. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Donec porta iaculis neque, feugiat pretium erat
                  vulputate ut.
                </p>
              </div>
              <div>
              <Image src="/img-2.PNG" className="ml-52 w-2/3" width ='500' height= '500' quality={100}></Image>
              </div>
            </div>
  
            <div className="grid grid-cols-2 gap-12 pt-28">
              <div>
                <p className="text-xl text-[#7A7A7A] text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pretium sit amet magna sed rutrum. Mauris eleifend turpis
                  condimentum arcu suscipit, in egestas felis sodales.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Donec maximus quis tortor a
                  placerat. Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames ac turpis egestas. Etiam turpis dolor,
                  congue a eros ut, feugiat tincidunt dui. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Donec porta iaculis neque, feugiat pretium erat
                  vulputate ut.
                </p>
              </div>
              <div>
              <Image src="/img-3.PNG" className="ml-52 w-2/3" width ='500' height= '500' quality={100}></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-br from-tahiti-100 to-tahiti-200">
      <div className="py-28 px-28">
        <div>
          <h3 className="text-6xl text-[#255FC1] text-center pb-16">Benefits</h3>
        </div>
        <div className="grid grid-cols-4 gap-4 pt-20">
          <div className="mr-[40px] ml-[40px] px-[30px] pt-[180px] pb-[36px] rounded-3xl border-[#4187FF] border-2 bg-[#090909]">
            <span></span>
            <p className="text-xl text-[#4187FF] text-center font-thin">
              Lorem ipsum <br /> dolor sit <br /> amet,
            </p>
          </div>
          <div className="mr-[40px] ml-[40px] px-[30px] pt-[180px] pb-[36px] rounded-3xl border-[#4187FF] border-2 bg-[#090909]">
            <span></span>
            <p className="text-xl text-[#4187FF] text-center font-thin">
              Lorem ipsum <br /> dolor sit <br /> amet,
            </p>
          </div>
          <div className="mr-[40px] ml-[40px] px-[30px] pt-[180px] pb-[36px] rounded-3xl border-[#4187FF] border-2 bg-[#090909]">
            <span></span>
            <p className="text-xl text-[#4187FF] text-center font-thin">
              Lorem ipsum <br /> dolor sit <br /> amet,
            </p>
          </div>
          <div className="mr-[40px] ml-[40px] px-[30px] pt-[180px] pb-[36px] rounded-3xl border-[#4187FF] border-2 bg-[#090909]">
            <span></span>
            <p className="text-xl text-[#4187FF] text-center font-thin">
              Lorem ipsum <br /> dolor sit <br /> amet,
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
  };
  
  export default Content;