import { AiOutlineMail } from "react-icons/ai"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='w-full bg-primary p-12 text-base text-center mt-32 text-background font-medium'>
      <div className="flex flex-col items-center w-11/12 lg:w-10/12 max-w-5xl overflow-hidden text-center mx-auto font-normal">
        <ul className='flex flex-col sm:flex-row gap-6 sm:gap-4 flex-wrap mb-12 mx-auto'>
          <li><a href="#" className="hover:text-white transition-colors duration-[400ms]">Home</a></li>
          <li><a href="#about" className="hover:text-white transition-colors duration-[400ms]">About</a></li>
          <li><a href="#experience" className="hover:text-white transition-colors duration-[400ms]">Experience</a></li>
          <li><a href="#portfolio" className="hover:text-white transition-colors duration-[400ms]">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors duration-[400ms]">Contact</a></li>
        </ul>
        <div className="flex gap-4 justify-center mb-10 sm:mb-16 ">
          <a href="mailto:jonathan.almeida1793@gmail.com" className="bg-background hover:bg-transparentColor text-white hover:text-background border border-transparentColor hover:border-background p-3 rounded-xl transition-colors duration-[400ms]"><AiOutlineMail /></a>
          <a href="https://www.instagram.com/jonathan.pr0/" className="bg-background hover:bg-transparentColor text-white hover:text-background border border-transparentColor hover:border-background p-3 rounded-xl transition-colors duration-[400ms]"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/jonathanamarante/" className="bg-background hover:bg-transparentColor text-white hover:text-background border border-transparentColor hover:border-background p-3 rounded-xl transition-colors duration-[400ms]"><FaLinkedin /></a>
        </div>
        <div className="mb-16">
          <small>&copy; Jonathan Amarante. Todos os direitos reservados</small>
        </div>
      </div>

    </footer >
  )
}

export default Footer