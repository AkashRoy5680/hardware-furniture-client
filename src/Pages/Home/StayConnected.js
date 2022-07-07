import React from "react";
import emailjs from "emailjs-com"
import { toast } from "react-toastify";
const StayConnected = () => {
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm("service_88o6bsd","template_ceo9nle",e.target,"O8lOf0N16K8GM-gpN").then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    });
    toast("Your opinion submitted")
    e.target.reset();
    
}
  return (
    <div className="bg-neutral py-10">
      <div className="md:w-5/12 px-4 md:px-0  mx-auto  ">
        <h1 className="text-center text-[34px] pt-5 font-bold  uppercase text-orange-400">
          Stay connected with us
        </h1>

        <div className=" mt-10">
         <div>
         <form  onSubmit={sendEmail} >
         <div className="grid grid-cols-1 font-koulen md:grid-cols-2 gap-6">
            <input
              type="text"
              name="first"
              placeholder="First Name"
              className="input w-full py-5"
            />
            <input
              type="text"
              name="last"
              placeholder="Last Name"
              className="input w-full py-5"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="input w-full py-5"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input w-full py-5"
            />
          </div>
          <div>
            <textarea
              name="message"
              required
              className="textarea font-koulen resize-none w-full pb-20 mt-6"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="px-8 mt-8 block mx-auto  rounded py-3 hover:bg-orange-700 transition duration-300 ease-in-out bg-primary text-white">
              Send Message
            </button>
          </div>
          </form>
         </div>
        </div>
      </div>
    </div>
  );
};

export default StayConnected;
