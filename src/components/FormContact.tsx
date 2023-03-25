import { useRef, useState } from 'react';
import emailjs from "emailjs-com"
import Feedback from './Feedback';
interface FormContactProps {
  className: string
}

const FormContact = (props: FormContactProps) => {
  const [isActive, setIsActive] = useState(false)
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm('service_um2nyfp', 'template_1v5sa4u', form.current, 'Dqq1PPLCiY5RwvPdt')
    e.target.reset()
    setIsActive(true)

    setTimeout(() => {
      setIsActive(false)
    }, 5000)
  };

  return (
    <form className={`flex flex-col gap-5 ${props.className}`} ref={form} onSubmit={sendEmail}>
      <Feedback isActive={isActive} />
      <input type="text" name="name" placeholder='Seu Nome Completo' required className="w-full p-6 rounded-lg bg-transparentColor border-2 border-primaryVariant resize-none text-white" />
      <input type="email" name="email" placeholder='Seu Email' required className="w-full p-6 rounded-lg bg-transparentColor border-2 border-primaryVariant resize-none text-white" />
      <textarea name="message" rows={7} placeholder='Sua Mensagem' className="w-full p-6 rounded-lg bg-transparentColor border-2 border-primaryVariant resize-none text-white" required></textarea>
      <button type='submit' className='w-max py-3 px-5 cursor-pointer inline-block text-backgroundVariant hover:text-backgroundVariant bg-primary hover:bg-white border border-primary hover:border-white transition-colors rounded-md duration-[400ms]'>Envie uma mensagem</button>
    </form>
  )
}

export default FormContact