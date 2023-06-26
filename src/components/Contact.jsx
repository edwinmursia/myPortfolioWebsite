import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { edwin } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_1lur6gx',
        'template_kax6vmp',
        {
          from_name: form.name,
          to_name: "Edwin",
          from_email: form.email,
          to_email: "mursia.edwin@gmail.com",
          message: form.message,
        },
        '2-dUBq2HShqZ5en-y'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for the message. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-2 overflow-hidden select-none">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[1] bg-black-100 p-8 rounded-2xl'>
      <div className="flex flex-col items-center sm:items-start md:flex-row md:justify-between">
          <div className="items-center">
            <p className={styles.sectionSubText}>Feel free to</p>
            <h3 className={styles.sectionHeadText}>Contact</h3>
          </div>
          <img
            src={edwin}
            className="rounded-full h-40 w-40"
            alt="Profile"
          />
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name:</span>
            <input type="text" name="name" value={form.name} onChange={handleChange}
              placeholder="Name..." className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"></input>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email:</span>
            <input type="email" name="email" value={form.email} onChange={handleChange}
              placeholder="Email..." className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"></input>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message:</span>
            <textarea rows="7" name="message" value={form.message} onChange={handleChange}
              placeholder="Message..." className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"></textarea>
          </label>
          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");