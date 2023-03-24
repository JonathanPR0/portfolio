import CardContact from "../components/CardContact"
import Header from "../components/Header"
import { MdOutlineMailOutline } from "react-icons/md"
import { BsInstagram } from "react-icons/bs"
import { GrLinkedinOption } from "react-icons/gr"
import FormContact from "../components/FormContact"

const Contact = () => {
  return (
    <section className='flex flex-col items-center w-full text-center mt-32 mx-auto contact'>
      <Header sectionTitle='Contact Me' subtitleText='Get In Touch' />
      <div className='flex flex-col lg:flex-row mx-auto w-11/12 md:w-[55%] lg:w-10/12 max-w-5xl gap-8 lg:gap-[5%]'>
        <div className="flex flex-col gap-8 lg:w-[35%]">
          <CardContact title="Email" smallText="jonathan.almeida1793@gmail.com" linkText="Send a message" linkHref="mailto:jonathan.almeida1793@gmail.com"><MdOutlineMailOutline /></CardContact>
          <CardContact title="Instagram" smallText="jonathan.pr0" linkText="Send a message" linkHref="https://www.instagram.com/jonathan.pr0/"><BsInstagram /></CardContact>
          <CardContact title="Linkedin" smallText="Jonathan Amarante" linkText="Send a message" linkHref="https://www.linkedin.com/in/jonathanamarante/"><GrLinkedinOption /></CardContact>
        </div>
        <FormContact className="lg:w-[60%]" />
      </div>
    </section>
  )
}

export default Contact