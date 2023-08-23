import React from "react";
import TopButton from "../components/TopButton";
import CustomButton from "../components/CustomButton";
const ContactForm = () => {
  return (
    <div className="bg-color">
    
      <main>
        {/* --------------- logo and get in touch section start------------- */}
        <section className="mt-5">
          {/* <div className="flex justify-center">
            <img
              className="acm-logo"
              src="img/ACM_Logo_22.png"
              alt="ACM Logo"
            />
          </div> */}
          <div className="text-center text-2xl mt-7">
            <h3>
              <span className="text-white">Get in</span>{" "}
              <span className="text-blue-600">To</span>
              <span className="text-blue-500">u</span>
              <span className="text-blue-400">ch</span>
            </h3>

            <p className="mt-2 text-slate-400 text-sm">
              Have feedback or need some help?
            </p>
          </div>
        </section>
        {/* --------------- logo and get in touch section end------------- */}

        {/* --------------- card section start------------- */}
        <section className="flex justify-center items-center mt-14">
          <div className="card bg-gradient-to-r from-indigo-900 to-blue-700  rounded-lg text-white p-16">
            <div className="flex justify-around">
              <div>
                <label className="text-sm text-slate-300 m-5" htmlFor="username">
                  Name
                </label>
                <br />
                <input
                  className="bg-color w-60 h-8 rounded-full mt-2 m-5 p-5 text-xs font-thin"
                  type="text"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label className="text-sm text-slate-300 m-5" htmlFor="username">
                  E-MAIL
                </label>
                <br />
                <input
                  className="bg-color w-60 h-8 rounded-full mt-2 p-5 text-xs font-thin m-5"
                  type="text"
                  placeholder="Your E-Mail"
                />
              </div>
            </div>
            <div className="flex justify-around mt-7">
              <div>
                <label className="text-sm text-slate-300 m-5" htmlFor="username">
                  SERVICES
                </label>
                <br />
                <input
                  className="bg-color w-60 h-8 rounded-full mt-2 p-5 text-xs font-thin m-5"
                  type="text"
                  placeholder="Select Services"
                />
              </div>

              <div>
                <label className="text-sm text-slate-300 m-5" htmlFor="username">
                  PHONE
                </label>
                <br />
                <input
                  className="bg-color w-60 h-8 rounded-full mt-2 p-5 text-xs font-thin m-5"
                  type="text"
                  placeholder="Your E-Mail"
                />
              </div>
            </div>
            <div className="mt-7">
              <label className="text-sm text-slate-300 m-5" htmlFor="username">
                MESSAGE
              </label>
              <br />
              <input
                className="bg-color message-width h-32 rounded-3xl mt-2 px-10 text-xs font-thin m-5"
                type="text"
                placeholder="Type here..."
              />
            </div>

            <div className="flex justify-center mt-11">
              {/* <button className="rounded-full bg-gradient-to-r from-blue-700 to-sky-300 px-5 py-3 hover: ">
                <i className="fa-solid fa-paper-plane me-2">Send Message</i>
                
              </button> */}
              <CustomButton text="Send Message" type="secondary"/>
            </div>
          </div>
        </section>
        {/* --------------- card section end------------- */}

        {/* --------------- general and technical section start ------------- */}
        {/* <section className="mt-16 flex justify-center">
          <div className="flex me-14">
            <div className="flex items-center">
              <i className="fa-solid fa-book fa-2x me-6 gc-icon p-2 bg-sky-400 border-sky-400"></i>
            </div>
            <div>
              <h3 className="text-blue-300 text-lg mb-4">
                General communication
              </h3>

              <p className="text-white text-xs">
                For general queries, including partnership
                <br />
                opportunities, please email{" "}
                <a className="text-blue-300" href="">
                  info@coder.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex items-center me-6">
              <i className="fa-solid fa-stopwatch fa-2x technical-icon p-2 bg-pink-400 border-pink-400"></i>
            </div>
            <div>
              <h3 className="text-pink-300 text-lg mb-4">
                Technical or account support
              </h3>
              <p className="text-white text-xs">
                We're here to help if you have technical issues
                <br />
                <a className="text-pink-300" href="">
                  contact support &gt;
                </a>
              </p>
            </div>
          </div>
        </section> */}
        

       
      </main>
    </div>
  );
};

export default ContactForm;
