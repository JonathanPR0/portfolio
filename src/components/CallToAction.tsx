import CV from '../assets/cv.pdf'
import LetsTalk from './LetsTalk'

const CallToAction = () => {
  return (
    <div className='flex gap-5 justify-center'>
      <a href={CV} download className='w-max py-3 px-5 cursor-pointer inline-block text-primary hover:text-backgroundVariant hover:bg-white border border-primary hover:border-white transition-colors rounded-md duration-[400ms]'>Download CV</a>
      <LetsTalk />
    </div>
  )
}

export default CallToAction