import { motion } from "framer-motion";
import { Link } from "react-scroll";
import meImage from "../assets/me.png";
import CallToAction from "../components/CallToAction";
import HeaderSocials from "../components/HeaderSocials";
import Image from "../components/Image";

const Home = () => {
  const text = "Fullstack Developer";

  return (
    <motion.main
      className="flex flex-col items-center h-screen sm:h-[68vh] lg:h-screen w-11/12 lg:w-10/12 max-w-5xl overflow-hidden pt-20 md:pt-28 text-center my-0 mx-auto font-medium relative home"
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      }}
    >
      <motion.h5
        className="text-lg mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            delay: 0.3,
          },
        }}
      >
        Olá! Eu sou
      </motion.h5>

      <motion.h1
        className="text-4xl mb-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.3,
            delay: 0.3,
          },
        }}
      >
        Jonathan Amarante
      </motion.h1>

      <motion.h5
        className="text-lg text-colorLight mb-6 font-mono relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.span className="inline-block overflow-hidden">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.1,
                  delay: 0.5 + index * 0.05,
                },
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </motion.h5>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            delay: 0.5,
          },
        }}
      >
        <CallToAction />
      </motion.div>

      <HeaderSocials />

      <motion.div
        className="bg-gradient-to-b from-primary to-transparentColor w-80 h-[28rem] mt-16 pt-20 px-6 pb-6 rounded-t-full relative overflow-hidden"
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            delay: 0.7,
            ease: "easeOut",
          },
        }}
        whileHover={{
          scale: 1.02,
          y: -5,
          transition: { duration: 0.2 },
        }}
      >
        {/* Efeito de revelação suave da imagem */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-transparent z-10 pointer-events-none"
          initial={{ scaleY: 1, transformOrigin: "top" }}
          animate={{
            scaleY: 0,
            transition: {
              duration: 0.8,
              delay: 0.9,
              ease: "easeInOut",
            },
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 1.1,
              ease: "easeOut",
            },
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.15 },
          }}
        >
          <Image src={meImage} alt="Foto de Jonathan" />
        </motion.div>

        {/* Efeito de brilho sutil */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 pointer-events-none"
          animate={{
            opacity: [0, 0.3, 0],
            transition: {
              duration: 2,
              delay: 1.5,
              ease: "easeInOut",
            },
          }}
        />
      </motion.div>

      <span className="hidden sm:inline-block absolute right-[-2.2rem] bottom-20 rotate-90 text-primary hover:text-white font-extralight text-md transition-colors duration-[400ms]">
        <Link to="contact" spy={true} smooth={true} offset={-80} duration={50}>
          Scroll Down
        </Link>
      </span>
    </motion.main>
  );
};

export default Home;
