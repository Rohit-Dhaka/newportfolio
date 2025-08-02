import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import {
  MessageCircle,
  ArrowRight,
  Loader2,
  CheckCircle,
  User,
  UserRound,
  UserCircle,
  Mail,
  
  MessagesSquare,
  MessageSquareText,
} from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm("service_rvrdz6z", "template_pjeq2yc", form.current, {
        publicKey: "C6NIoC6x1YM3TUzDy",
      })
      .then(
        () => {
          setStatus("sent");
          toast.success("Message sent successfully!");
          form.current.reset();
          setTimeout(() => setStatus("idle"), 3000);
        },
        (error) => {
          setStatus("error");
          toast.error("Failed to send message.");
          console.error("EmailJS Error:", error.text);
          setTimeout(() => setStatus("idle"), 3000);
        }
      );
  };

  const renderIcon = () => {
    if (status === "sending")
      return <Loader2 className="w-5 h-5 animate-spin mr-2" />;
    if (status === "sent")
      return <CheckCircle className="w-5 h-5 text-white mr-2" />;
    return <ArrowRight className="w-5 h-5 mr-2" />;
  };

  return (
    <div id="contact" className="container overflow-hidden pb-12">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-6">
          <MessageCircle className="w-8 h-8 text-gradient-primary" />          
          
          
          
          <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider">
            Let's Connect
          </span>
        </div>
        <h2 className="text-4xl font-bold mb-6">
          <span className="text-gradient">CONTACT ME</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto sm:px-4">
          I'm always open to discussing new projects, creative ideas, or
          opportunities. Let’s make something great together.
        </p>
      </div>

      <div className="flex justify-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col sm:gap-6 gap-4 sm:w-[80%]"
        >
          <div className="flex gap-4 max-sm:flex-wrap">
            <div className="w-full text-white border py-2 px-4 rounded-lg flex gap-2" data-aos="fade-right">
              <UserRound className=" text-gradient-primary" />
              <input
                type="text"
                name="to_name"
                placeholder="Your Name"
                required
                className="bg-transparent  outline-none w-full"
              />
            </div>
            <div className="w-full text-white border py-2 px-4 rounded-lg flex gap-2" data-aos="fade-left">
              <Mail className=" text-gradient-primary" />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="bg-transparent  outline-none w-full"
              />
            </div>
          </div>

     <div className="text-white border py-2 px-4 rounded-lg flex gap-2" data-aos="fade-up">
           <MessageSquareText className=" text-gradient-primary" />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="bg-transparent outline-none w-full"
          />
     </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center py-3 px-6 mt-6 text-white text-[16px] font-medium rounded-full bg-gradient-to-r from-[#370C75] via-[#A362FF] to-[#370C75] transition-all duration-300 hover:bg-[position:right_bottom] hover:shadow-glow"
            >
              {renderIcon()}
              {status === "sent"
                ? "SENT"
                : status === "sending"
                ? "SENDING"
                : "SEND MESSAGE"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
