import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import aboutMeImage from "../assets/me-about.jpg";
import Card from "../components/Card";
import Header from "../components/Header";
import Image from "../components/Image";
import PrimaryBtn from "../components/PrimaryBtn";

const About = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: -10,
      transition: {
        duration: 0.7,
        ease: "backOut",
      },
    },
  };

  return (
    <motion.section
      className="flex flex-col items-center w-full mt-32 mx-auto about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={itemVariants}>
        <Header sectionTitle="Sobre Mim" subtitleText="Saiba Mais" />
      </motion.div>
      <div className="grid grid-cols-1 sm:gap-0 lg:grid-cols-12 mx-auto w-11/12 lg:w-10/12 max-w-5xl">
        <motion.div
          className="grid place-items-center w-2/3 sm:w-1/2 mb-12 sm:mt-8 sm:mb-16 mx-auto lg:w-full aspect-square bg-gradient-to-tr from-transparentColor via-primary rounded-[2rem] col-span-5 md:col-span-4"
          variants={imageVariants}
        >
          <Image
            src={aboutMeImage}
            alt="Imagem sobre mim"
            className="rounded-[2rem] origin-center rotate-[10deg] hover:rotate-0 transition-transform duration-[500ms]"
          />
        </motion.div>
        <div className="flex flex-col col-span-7 lg:col-end-13">
          <motion.div
            className="flex items-center justify-center flex-wrap mx-auto gap-4 w-full"
            variants={itemVariants}
          >
            <Card
              title="Experiência"
              smallText="4+ Anos Desenvolvendo"
              cardClass="h-full w-[46%] sm:w-[48%]"
            >
              <FaAward />
            </Card>
            <Card title="Projetos" smallText="25+ No Github" cardClass="h-full w-[46%] sm:w-[48%]">
              <VscFolderLibrary />
            </Card>
          </motion.div>
          <motion.p
            className="text-md text-colorLight text-left mt-4 mb-6 lg:mt-6 lg:mb-8"
            variants={itemVariants}
          >
            Sou desenvolvedor web com experiência no desenvolvimento de aplicações voltadas para a
            automação de processos e melhoria da gestão interna. Atuo como fullstack contribuindo
            para a criação de soluções que otimizam o fluxo de trabalho e promovem a integração
            entre diferentes setores da empresa. Desenvolvi diversos projetos utilizando ferramentas
            como React, Next.js, Express, Tailwind e MongoDB, sempre buscando apresentar um design
            responsivo que funcione perfeitamente em dispositivos móveis e desktop.
          </motion.p>
          <motion.div variants={itemVariants}>
            <PrimaryBtn text="Contacte-me" href="contact" scroll className="self-start" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
