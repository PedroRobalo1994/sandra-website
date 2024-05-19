import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import Sandra3 from "../img/portfolio/sandra_3.jpg";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const emailSentToast = () =>
    toast.success(t('email_sent_success_message'), {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const emailNotSentToast = () =>
    toast.error(t('email_error_message'), {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n34xk3l",
        "template_reha55o",
        form.current,
        "7e0LUvjNuAd9HHdsW"
      )
      .then(
        (result) => {
          console.log(`Email Sent with Code ${result.text}`);
          form.current.reset();
          emailSentToast();
        },
        (error) => {
          console.log(error.text);
          emailNotSentToast();
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ transition1 }}
      className="section bg-white"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start text-center lg:text-left ">
          {/* bg */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition1 }}
            className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10"
          ></motion.div>
          {/* text $ form */}
          <div className="lg:flex-1 lg:pt-32 px-4 ">
            <h1 className="h1 text-pink">{t('contact_me_title')}</h1>
            {/* form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-y-4"
            >
              <div className="flex gap-x-10 ">
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  name="user_name"
                  placeholder={t('name_placeholder')}
                ></input>
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  name="user_email"
                  placeholder={t('email_placeholder')}
                ></input>
              </div>
              <input
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                type="text"
                name="message"
                placeholder={t('message_placeholder')}
              ></input>
              <button className="btn rounded-xl mb-[30px] mx-auto lg:mx-30 self-start bg-green mt-8">
                {t('send_button')}
              </button>
              <ToastContainer />
            </form>
          </div>
          {/*image*/}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={{ transition: transition1, duration: 1.5 }}
            className="lg:flex-1"
          >
            <img className="rounded-t-full" src={Sandra3} alt=""></img>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
