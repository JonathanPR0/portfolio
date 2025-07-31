import { motion } from "framer-motion";

interface CardContactProps {
  children: any;
  title: string;
  smallText: string;
  linkText: string;
  linkHref: string;
  iconClass?: string;
  cardClass?: string;
}

const CardContact = (props: CardContactProps) => {
  return (
    <motion.article
      className={`flex items-center justify-center flex-col lg:h-full bg-backgroundVariant border border-transparentColor p-8 text-center rounded-2xl transition-colors duration-[400ms] hover:border-primaryVariant cursor-default gap-2 ${props.cardClass}`}
      initial={{ opacity: 0, y: -40, scale: 0.9 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      whileHover={{
        y: -3,
        scale: 1.02,
        opacity: 0.9,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        },
      }}
      whileTap={{ scale: 0.97 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className={`flex items-center justify-center text-white text-2xl mb-2 ${props.iconClass}`}
        initial={{ scale: 0, rotate: -90 }}
        whileInView={{
          scale: 1,
          rotate: 0,
          transition: {
            delay: 0.1,
            duration: 0.3,
            ease: "backOut",
          },
        }}
        whileHover={{
          scale: 1.2,
          rotate: [0, -5, 5, 0],
          transition: {
            duration: 0.4,
          },
        }}
        viewport={{ once: true }}
      >
        {props.children}
      </motion.div>
      <motion.h5
        className="text-base text-white"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.2,
            duration: 0.3,
          },
        }}
        viewport={{ once: true }}
      >
        {props.title}
      </motion.h5>
      <motion.small
        className="text-xs text-colorLight"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.3,
            duration: 0.3,
          },
        }}
        viewport={{ once: true }}
      >
        {props.smallText}
      </motion.small>
      <motion.a
        href={props.linkHref}
        className="text-sm text-primary cursor-pointer hover:text-white"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.4,
            duration: 0.3,
          },
        }}
        whileHover={{
          scale: 1.05,
          color: "#ffffff",
          transition: {
            duration: 0.2,
          },
        }}
        whileTap={{ scale: 0.95 }}
        viewport={{ once: true }}
      >
        {props.linkText}
      </motion.a>
    </motion.article>
  );
};

export default CardContact;
