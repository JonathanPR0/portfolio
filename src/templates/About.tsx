import aboutMeImage from '../assets/me-about.jpg'
import Card from '../components/Card'
import Image from '../components/Image'
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
import Header from '../components/Header'
import PrimaryBtn from '../components/PrimaryBtn'

const About = () => {
  return (
    <section id='about' className='flex flex-col items-center w-full text-center mt-32 mx-auto'>
      <Header sectionTitle='About Me' subtitleText='Get To Know' />
      <div className='grid grid-cols-1 sm:gap-0 lg:grid-cols-12 mx-auto w-11/12 lg:w-10/12 max-w-5xl'>
        <div className='grid place-items-center w-2/3 sm:w-1/2 mb-12 sm:mt-8 sm:mb-16 mx-auto lg:w-full aspect-square bg-gradient-to-tr from-transparentColor via-primary rounded-[2rem] col-span-5 md:col-span-4'>
          <Image src={aboutMeImage} alt="Imagem sobre mim" className='rounded-[2rem] origin-center rotate-[10deg] hover:rotate-0 transition-transform duration-[400ms]' />
        </div>
        <div className='flex flex-col col-span-7 lg:col-end-13'>
          <div className='flex items-center justify-center flex-wrap mx-auto gap-4 w-full'>
            <Card title='Experience' smallText='3+ Years Working' cardClass='w-[43%] md:w-[31%]'>
              <FaAward />
            </Card>
            <Card title='Clients' smallText='200+ Worldwild' cardClass='w-[43%] md:w-[31%]'>
              <FiUsers />
            </Card>
            <Card title='Projects' smallText='80+ Completed' cardClass='w-[43%] md:w-[31%]'>
              <VscFolderLibrary />
            </Card>
          </div>
          <p className='text-md text-colorLight text-left mt-4 mb-6 lg:mt-6 lg:mb-8'>Minha especialização é no desenvolvimento da interface visual de websites. Com um olhar atento aos detalhes, utilizo minhas habilidades em HTML, CSS e JavaScript para criar experiências de usuário atraentes e funcionais.  Devido à minha paixão pelo aprendizado contínuo e o desejo de permanecer atualizado sobre as últimas tendências e tecnologias, sou um profissional dedicado a aprimorar minhas habilidades e criar produtos de qualidade excepcional.</p>
          <PrimaryBtn text="Let's Talk" href='#contact' />
        </div>
      </div>
    </section>
  )
}

export default About