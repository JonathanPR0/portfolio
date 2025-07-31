import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Feedback from "./Feedback";
interface FormContactProps {
  className: string;
}

const FormContact = (props: FormContactProps) => {
  const [isActive, setIsActive] = useState(false);
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm("service_um2nyfp", "template_1v5sa4u", form.current, "Dqq1PPLCiY5RwvPdt");
    e.target.reset();
    setIsActive(true);

    setTimeout(() => {
      setIsActive(false);
    }, 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.form
      className={`flex flex-col gap-5 ${props.className}`}
      ref={form}
      onSubmit={sendEmail}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Feedback isActive={isActive} />
      <motion.input
        type="text"
        name="name"
        placeholder="Seu Nome Completo"
        required
        className="w-full p-6 rounded-lg bg-transparentColor border-2 border-primaryVariant resize-none text-white focus:border-primary focus:outline-none transition-colors duration-300"
        variants={formItemVariants}
        whileFocus={{
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
      />
      <motion.input
        type="email"
        name="email"
        placeholder="Seu Email"
        required
        className="w-full p-6 rounded-lg bg-transparentColor border-2 border-primaryVariant resize-none text-white focus:border-primary focus:outline-none transition-colors duration-300"
        variants={formItemVariants}
        whileFocus={{
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
      />
      <motion.textarea
        name="message"
        rows={7}
        placeholder="Sua Mensagem"
        className="w-full p-6 rounded-lg bg-transparentColor border-2 border-primaryVariant resize-none text-white focus:border-primary focus:outline-none transition-colors duration-300"
        variants={formItemVariants}
        whileFocus={{
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
        required
      ></motion.textarea>
      <motion.button
        type="submit"
        className="w-max py-3 px-5 cursor-pointer inline-block text-backgroundVariant hover:text-backgroundVariant bg-primary hover:bg-white border border-primary hover:border-white transition-colors rounded-md duration-[400ms]"
        variants={buttonVariants}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        Envie uma mensagem
      </motion.button>
    </motion.form>
  );
};

export default FormContact;
