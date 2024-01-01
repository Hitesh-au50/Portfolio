import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import  toast , { Toaster }  from 'react-hot-toast';
const Contact = () => {
  const form = useRef();
  const contact_info = [
    { logo: "mail", text: "hiteshverma3666@gmail.com" },
    { logo: "logo-whatsapp", text: "+91 93504 08017" },
    {
      logo: "location",
      text: `Dadri gate , Laxmi Nagar, Bhiwani,
      Haryana, India 127021`,
    },
  ];
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_qde90ee', 
      'template_8d58uub', 
      form.current,
       'FtnB75gGwuG4XEYTj'
       )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset()
          toast.success('Email send Successfully')
      }, (error) => {
          console.log(error.text);
          toast.error(error.text)
      });
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
    <Toaster />
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form 
          ref={form} 
          onSubmit={sendEmail} 
          className="flex flex-col flex-1 gap-5"
          >
            <input 
            name='to_name'
            type="text" 
            required
            placeholder="Your Name" 
            />
            <input 
            name='from_name'
            pattern='[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$'
            required
            type="Email" 
            placeholder="Your Email Address"
             />
            <textarea 
            name='message'
            placeholder="Your Message"
             rows={6}
             >
             </textarea>
            <button 
            className="btn-primary w-fit"
            >
            Send Message
            </button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
