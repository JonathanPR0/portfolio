import { BsLinkedin } from "react-icons/bs"
import { FaGithubAlt } from "react-icons/fa"
import { FiDribbble } from "react-icons/fi"

const HeaderSocials = () => (
  <div className="hidden sm:flex flex-col items-center gap-3 absolute left-0 bottom-12 after:content-[''] after:w-[1px] after:h-8 after:bg-primary">
    <a href="https://www.linkedin.com/in/jonathanamarante/" target="_blank"><BsLinkedin className="text-primary hover:text-white duration-[400ms]" /></a>
    <a href="https://github.com/JonathanPR0" target="_blank"><FaGithubAlt className="text-primary hover:text-white duration-[400ms]" /></a>
    <a href="https://dribbble.com/" target="_blank"><FiDribbble className="text-primary hover:text-white duration-[400ms]" /></a>
  </div>
)

export default HeaderSocials