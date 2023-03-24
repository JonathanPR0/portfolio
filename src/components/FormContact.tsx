interface FormContactProps {
  className: string
}

const FormContact = (props: FormContactProps) => {
  return (
    <form className={`flex flex-col gap-5 ${props.className}`}>
      <input type="text" name="name" placeholder='Seu Nome Completo' required className="w-full p-6 rounded-lg bg-transparentColor border-2 border-primaryVariant resize-none text-white" />
      <input type="email" name="email" placeholder='Seu Email' required className="w-full p-6 rounded-lg bg-transparentColor border-2 border-primaryVariant resize-none text-white" />
      <textarea name="message" rows={7} placeholder='Sua Mensagem' className="w-full p-6 rounded-lg bg-transparentColor border-2 border-primaryVariant resize-none text-white"></textarea>
      <button type='submit' className='w-max py-3 px-5 cursor-pointer inline-block text-backgroundVariant hover:text-backgroundVariant bg-primary hover:bg-white border border-primary hover:border-white transition-colors rounded-md duration-[400ms]'>Envie uma mensagem</button>
    </form>
  )
}

export default FormContact