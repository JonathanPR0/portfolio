import { BsLinkedin } from "react-icons/bs"
import { FaGithubAlt } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const HeaderSocials = () => (
  <div className="hidden sm:flex flex-col items-center gap-3 absolute left-0 bottom-12 after:content-[''] after:w-[1px] after:h-8 after:bg-primary">
    <a href="https://www.linkedin.com/in/jonathanamarante/" target="_blank" className="text-primary hover:text-white duration-[400ms]"><BsLinkedin /></a>
    <a href="https://github.com/JonathanPR0" target="_blank" className="text-primary hover:text-white duration-[400ms]"><FaGithubAlt /></a>
    <a href="https://www.instagram.com/jonathan.pr0/" target="_blank" className="text-primary hover:text-white duration-[400ms]"><FaInstagram /></a>
  </div>
)

export default HeaderSocials