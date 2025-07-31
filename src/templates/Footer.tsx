import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <footer className="w-full bg-primary p-12 text-base text-center mt-32 text-background font-medium">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-80}
        duration={50}
        className="flex items-center justify-center mb-8 stroke-background hover:stroke-backgroundVariant transition-colors duration-[400ms]"
      >
        <Logo />
      </Link>
      <div className="flex flex-col items-center justify-center w-11/12 lg:w-10/12 max-w-5xl overflow-hidden text-center mx-auto font-normal">
        <ul className="flex justify-center sm:flex-row gap-6 sm:gap-4 flex-wrap mb-12 mx-auto w-full">
          <li className="hover:text-white transition-colors duration-[400ms]">
            <Link to="home" spy={true} smooth={true} offset={-80} duration={50}>
              Home
            </Link>
          </li>
          <li className="hover:text-white transition-colors duration-[400ms]">
            <Link to="about" spy={true} smooth={true} offset={-80} duration={50}>
              Sobre
            </Link>
          </li>
          <li className="hover:text-white transition-colors duration-[400ms]">
            <Link to="experience" spy={true} smooth={true} offset={-80} duration={50}>
              Experiência
            </Link>
          </li>
          <li className="hover:text-white transition-colors duration-[400ms]">
            <Link to="contact" spy={true} smooth={true} offset={-80} duration={50}>
              Contato
            </Link>
          </li>
        </ul>
        <div className="flex gap-4 justify-center mb-10 sm:mb-16 ">
          <a
            href="mailto:jonathan.amarante.dev@gmail.com"
            className="bg-background hover:bg-transparentColor text-white hover:text-background border border-transparentColor hover:border-background p-3 rounded-xl transition-colors duration-[400ms]"
          >
            <AiOutlineMail />
          </a>
          <a
            href="https://www.instagram.com/jonathan.pr0/"
            className="bg-background hover:bg-transparentColor text-white hover:text-background border border-transparentColor hover:border-background p-3 rounded-xl transition-colors duration-[400ms]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/jonathanamarante/"
            className="bg-background hover:bg-transparentColor text-white hover:text-background border border-transparentColor hover:border-background p-3 rounded-xl transition-colors duration-[400ms]"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="mb-16">
          <small>&copy; Jonathan Amarante. Todos os direitos reservados</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
