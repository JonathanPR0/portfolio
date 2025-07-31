import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { MdOutlineMailOutline } from "react-icons/md";
import CardContact from "../components/CardContact";
import FormContact from "../components/FormContact";
import Header from "../components/Header";

const Contact = () => {
  return (
    <section className="flex flex-col items-center w-full text-center mt-32 mx-auto contact">
      <Header sectionTitle="Entre em Contato" subtitleText="Quer falar comigo" />
      <div className="flex flex-col lg:flex-row mx-auto w-11/12 md:w-[55%] lg:w-10/12 max-w-5xl gap-8 lg:gap-[5%]">
        <div className="flex flex-col gap-8 lg:w-[35%]">
          <CardContact
            title="Email"
            smallText="jonathan.amarante.dev@gmail.com"
            linkText="Envie uma mensagem"
            linkHref="mailto:jonathan.amarante.dev@gmail.com"
          >
            <MdOutlineMailOutline />
          </CardContact>
          <CardContact
            title="Instagram"
            smallText="jonathan.pr0"
            linkText="Envie uma mensagem"
            linkHref="https://www.instagram.com/jonathan.pr0/"
          >
            <BsInstagram />
          </CardContact>
          <CardContact
            title="Linkedin"
            smallText="Jonathan Amarante"
            linkText="Envie uma mensagem"
            linkHref="https://www.linkedin.com/in/jonathanamarante/"
          >
            <GrLinkedinOption />
          </CardContact>
        </div>
        <FormContact className="lg:w-[60%]" />
      </div>
    </section>
  );
};

export default Contact;
