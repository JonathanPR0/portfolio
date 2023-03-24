import CallToAction from "../components/CallToAction"
import meImage from "../assets/me.png"
import HeaderSocials from "../components/HeaderSocials"
import Image from "../components/Image"



const Home = () => {
  return (
    <header className='flex flex-col items-center h-screen sm:h-[68vh] lg:h-screen w-11/12 lg:w-10/12 max-w-5xl overflow-hidden pt-28 text-center my-0 mx-auto font-medium relative home'>
      <h5 className='text-lg mb-4'>Hello I'm'</h5>
      <h1 className='text-4xl mb-2'>Jonathan Amarante</h1>
      <h5 className='text-lg text-colorLight mb-6'>Front-end Developer</h5>
      <CallToAction />
      <HeaderSocials />

      <div className="bg-gradient-to-b from-primary to-transparentColor w-80 h-[28rem] mt-16 pt-20 px-6 pb-6 rounded-t-full">
        <Image src={meImage} alt="Foto de Jonathan" />
      </div>

      <a href="#contact" className="hidden sm:inline-block absolute right-[-2.2rem] bottom-20 rotate-90 text-primary hover:text-white font-extralight text-md transition-colors duration-[400ms]">Scroll Down</a>
    </header >
  )
}

export default Home