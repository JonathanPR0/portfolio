import { motion } from "framer-motion";
import Image from "./Image";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";

interface ProjectProps {
  srcImg: string;
  title: string;
  textPrimaryBtn?: string;
  urlPrimaryBtn?: string;
  textSecondaryBtn?: string;
  urlSecondaryBtn?: string;
}

const Project = (props: ProjectProps) => {
  return (
    <motion.article
      className="flex flex-col w-full sm:w-[43%] md:w-[31%] p-5 bg-backgroundVariant border border-transparentColor hover:border-primaryVariant rounded-[2rem] transition-colors duration-[400ms]"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.3,
          ease: "easeOut",
          delay: 0.3,
        },
      }}
      whileHover={{
        y: -5,
        scale: 1.01,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.3,
            ease: "easeOut",
            delay: 0.3,
          },
        }}
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.15 },
        }}
        viewport={{ once: true }}
      >
        <Image src={props.srcImg} className="rounded-3xl overflow-hidden aspect-[4/3]" />
      </motion.div>
      <motion.h3
        className="text-left text-lg font-medium mt-4 mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            ease: "easeOut",
            delay: 0.3,
          },
        }}
        viewport={{ once: true }}
      >
        {props.title}
      </motion.h3>
      <motion.div
        className="flex gap-2 md:gap-3 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            ease: "easeOut",
            delay: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        {props.textSecondaryBtn && (
          <motion.div
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.97 }}
          >
            <SecondaryBtn
              text={props.textSecondaryBtn}
              href={props?.urlSecondaryBtn || ""}
              className="text-sm md:px-3 lg:px-5 flex items-center justify-center"
            />
          </motion.div>
        )}
        {props.textPrimaryBtn && (
          <motion.div
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.97 }}
          >
            <PrimaryBtn
              text={props.textPrimaryBtn}
              href={props?.urlPrimaryBtn || ""}
              className="text-sm md:px-3 lg:px-5 flex items-center justify-center"
            />
          </motion.div>
        )}
      </motion.div>
    </motion.article>
  );
};

export default Project;
