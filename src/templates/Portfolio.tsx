import Header from '../components/Header'
import Project from '../components/Project'
import Img from "../assets/portfolio1.jpg"

const Portfolio = () => {
  return (
    <section className='flex flex-col items-center w-full text-center mt-32 mx-auto portfolio'>
      <Header sectionTitle='Portfolio' subtitleText='My Recent Work' />
      <div className='mx-auto w-11/12 lg:w-10/12 max-w-5xl'>
        <div className='flex items-center justify-center flex-wrap mx-auto  gap-6 lg:gap-8 w-full'>
          <Project title='This is a portfolio item title' textPrimaryBtn='Live Demo' urlPrimaryBtn='https://jon-portfolio.vercel.app/' textSecondaryBtn='Github' urlSecondaryBtn='https://github.com/JonathanPR0' srcImg={Img} />
          <Project title='This is a portfolio item title' textPrimaryBtn='Live Demo' urlPrimaryBtn='https://jon-portfolio.vercel.app/' textSecondaryBtn='Github' urlSecondaryBtn='https://github.com/JonathanPR0' srcImg={Img} />
          <Project title='This is a portfolio item title' textPrimaryBtn='Live Demo' urlPrimaryBtn='https://jon-portfolio.vercel.app/' textSecondaryBtn='Github' urlSecondaryBtn='https://github.com/JonathanPR0' srcImg={Img} />
          <Project title='This is a portfolio item title' textPrimaryBtn='Live Demo' urlPrimaryBtn='https://jon-portfolio.vercel.app/' textSecondaryBtn='Github' urlSecondaryBtn='https://github.com/JonathanPR0' srcImg={Img} />
          <Project title='This is a portfolio item title' textPrimaryBtn='Live Demo' urlPrimaryBtn='https://jon-portfolio.vercel.app/' textSecondaryBtn='Github' urlSecondaryBtn='https://github.com/JonathanPR0' srcImg={Img} />
          <Project title='This is a portfolio item title' textPrimaryBtn='Live Demo' urlPrimaryBtn='https://jon-portfolio.vercel.app/' textSecondaryBtn='Github' urlSecondaryBtn='https://github.com/JonathanPR0' srcImg={Img} />
        </div>
      </div>
    </section>
  )
}

export default Portfolio