import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { Button } from "./ui/button";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rvrdz6z', 'template_pjeq2yc', form.current, {
        publicKey: 'C6NIoC6x1YM3TUzDy',
      })
      .then(
        () => {
          toast.success("Message sent successfully! 🎉");
          console.log("SUCCESS!");
          form.current.reset(); // clear form after success
        },
        (error) => {
          toast.error("Failed to send message. ❌");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="Contact" className="">
      <div className="overflow-x-hidden container pb-12">
        <h1 className="text-gradient heading-secondary text-center">
          CONTACT ME
        </h1>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6"
        >
          {/* Name */}
          <div className="flex flex-col gap-2 px-1.5">
            <label className="text-xl text-muted-foreground pb-2">
              Your Name
            </label>
            <input
              type="text"
              name="to_name"
              placeholder="Your Name"
              required
              className="bg-transparent text-white border py-2 px-4 rounded-lg"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 px-1.5">
            <label className="text-xl text-muted-foreground pb-2">
              Email
            </label>
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="bg-transparent text-white border py-2 px-4 rounded-lg"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 px-1.5">
            <label className="text-xl text-muted-foreground pb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              className="bg-transparent text-white border py-2 px-4 rounded-lg"
            />
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <Button
              // className="w-full sm:w-52 cursor-pointer"
                      className="flex py-3 cursor-pointer px-6 justify-center items-center mt-6 font-poppins font-medium text-center text-[16px] text-white no-underline border border-transparent rounded-[100px] transition-all duration-300 bg-gradient-to-r from-[#370C75] via-[#A362FF] to-[#370C75] bg-[length:200%_auto] hover:bg-[position:right_bottom] hover:shadow-glow"
              type="submit"
            >
              SEND MESSAGE
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
