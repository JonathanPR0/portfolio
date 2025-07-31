import { motion } from "framer-motion";

interface HeaderProps {
  sectionTitle: string;
  subtitleText: string;
}

const Header = (props: HeaderProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="text-center"
    >
      <motion.h5 className="mb-2 text-colorLight" variants={subtitleVariants}>
        {props.subtitleText}
      </motion.h5>
      <motion.h2
        className="text-4xl font-bold mb-12 text-primary"
        variants={titleVariants}
        whileHover={{
          scale: 1.02,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 10,
          },
        }}
      >
        {props.sectionTitle}
      </motion.h2>
    </motion.div>
  );
};

export default Header;
