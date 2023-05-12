import React from "react";
import { MdWavingHand } from "react-icons/md";
import ContactForm from "../../Components/Contact/ContactForm";
export default function ContactPage() {
  return (
    <div className='h-screen w-full flex flex-col gap-3 justify-center items-center bg-gradient-to-r sm:text-sm md:text-base from-gray-500 to-black py-3 '>
      <div className='ContactPara '>
        <h1>Hưng Mai - phone: 0931313956</h1>
        <h1>Love to hear from you,</h1>
        <h1 className='flex flex-col justify-center items-center gap-1'>
          Get in touch <MdWavingHand />
        </h1>
      </div>
      <ContactForm />
    </div>
  );
}
