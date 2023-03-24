import CV from '../assets/cv.pdf'
import PrimaryBtn from './PrimaryBtn'
import LetsTalk from './PrimaryBtn'
import SecondaryBtn from './SecondaryBtn'

const CallToAction = () => {
  return (
    <div className='flex gap-5 justify-center'>
      <SecondaryBtn text='Download CV' href={CV} download />
      <PrimaryBtn text="Contacte-me" href='contact' scroll />
    </div>
  )
}

export default CallToAction