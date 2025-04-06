import { useRef, useState } from "react";
import "./contactSection.css";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const listVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

function ContactSection() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef();
  const formIsInView = useInView(formRef, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, ref.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          setSuccess(false);
          setError(true);
        }
      );
  };

  return (
    <div className="contacts">
      <div className="cSection">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          variants={listVariants}
          initial="initial"
          animate={formIsInView ? "animate" : "initial"}
        >
          <motion.h1 variants={listVariants} className="cTitle">
            Let`s work together
          </motion.h1>
          <motion.div variants={listVariants} className="formItem">
            <label>Name</label>
            <input type="text" placeholder="John Doe" name="name" />
          </motion.div>
          <motion.div variants={listVariants} className="formItem">
            <label>Email</label>
            <input type="Email" placeholder="john@gmail.com" />
          </motion.div>
          <motion.div variants={listVariants} className="formItem">
            <label>Message</label>
            <textarea
              rows={10}
              placeholder="Write your message here..."
              name="message"
            ></textarea>
          </motion.div>
          <motion.button variants={listVariants} className="formButton">
            Send
          </motion.button>
          {success && (
            <span className="emailSuccessMessage">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="emailFailMessage">Something went wrong!</span>
          )}
        </motion.form>
      </div>
      <div className="cSection">
        <ContactSvg />
      </div>
    </div>
  );
}

export default ContactSection;
