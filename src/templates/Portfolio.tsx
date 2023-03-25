import Header from '../components/Header'
import Project from '../components/Project'
import pantanow from "../assets/pantanow.png"
import adminTemplate from "../assets/admin-template.png"
import themeSwitcher from "../assets/theme-switcher.png"
import countdown from "../assets/countdown.png"
import rocketflix from "../assets/rocketflix.png"
import recipePage from "../assets/recipePage.png"

const Portfolio = () => {
  return (
    <section className='flex flex-col items-center w-full text-center mt-32 mx-auto portfolio'>
      <Header sectionTitle='Portfólio' subtitleText='Trabalhos Recentes' />
      <div className='mx-auto w-11/12 lg:w-10/12 max-w-5xl'>
        <div className='flex justify-center flex-wrap mx-auto gap-6 lg:gap-8 w-full min-h-full'>
          <Project title='Pantanow' textPrimaryBtn='Veja Mais' urlPrimaryBtn='https://pantanow.vercel.app/' textSecondaryBtn='Github' urlSecondaryBtn='https://github.com/JonathanPR0/pantanow' srcImg={pantanow} />
          <Project title='Admin Template' textPrimaryBtn='Veja Mais' urlPrimaryBtn='https://admin-template-cod3r.vercel.app/autentication' textSecondaryBtn='Github' urlSecondaryBtn='https://github.com/JonathanPR0/admin-template' srcImg={adminTemplate} />
          <Project title='Theme Switcher' textPrimaryBtn='Veja Mais' urlPrimaryBtn='https://theme-switcher-umber.vercel.app/' textSecondaryBtn='Github' urlSecondaryBtn='https://github.com/JonathanPR0/theme-switcher' srcImg={themeSwitcher} />
          <Project title='Countdown' textPrimaryBtn='Veja Mais' urlPrimaryBtn='https://jonathanpr0.github.io/countdown/' textSecondaryBtn='Github' urlSecondaryBtn='https://github.com/JonathanPR0/countdown' srcImg={countdown} />
          <Project title='Rocketflix' textPrimaryBtn='Veja Mais' urlPrimaryBtn='https://jonathanpr0.github.io/rocketflix/' textSecondaryBtn='Github' urlSecondaryBtn='https://github.com/JonathanPR0/rocketflix' srcImg={rocketflix} />
          <Project title='Recipe Page' textPrimaryBtn='Veja Mais' urlPrimaryBtn='https://jonathanpr0.github.io/recipePage/' textSecondaryBtn='Github' urlSecondaryBtn='https://github.com/JonathanPR0/recipePage' srcImg={recipePage} />
        </div>
      </div>
    </section>
  )
}

export default Portfolio