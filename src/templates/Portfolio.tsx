import adminTemplate from "../assets/admin-template.png";
import devfinance from "../assets/devfinance.png";
import pantanow from "../assets/pantanow.png";
import polarplus from "../assets/polarplus.png";
import territoryManager from "../assets/territoryManager.png";
import vibes80 from "../assets/vibes80.png";
import Header from "../components/Header";
import Project from "../components/Project";

const Portfolio = () => {
  return (
    <section className="flex flex-col items-center w-full text-center mt-32 mx-auto portfolio">
      <Header sectionTitle="Portfólio" subtitleText="Trabalhos Recentes" />
      <div className="mx-auto w-11/12 lg:w-10/12 max-w-5xl">
        <div className="flex justify-center flex-wrap mx-auto gap-6 lg:gap-8 w-full min-h-full">
          <Project
            title="Polar Plus"
            textPrimaryBtn="Veja Mais"
            urlPrimaryBtn="https://polarplus.com.br/"
            textSecondaryBtn="Github"
            urlSecondaryBtn="https://github.com/JonathanPR0/polarplus-lp"
            srcImg={polarplus}
          />
          <Project
            title="TerritoryManager"
            textPrimaryBtn="Veja Mais"
            urlPrimaryBtn="https://territorymanagervale.vercel.app/"
            textSecondaryBtn="Github"
            urlSecondaryBtn="https://github.com/JonathanPR0/territorymanager"
            srcImg={territoryManager}
          />
          <Project
            title="Pantanow"
            textPrimaryBtn="Veja Mais"
            urlPrimaryBtn="https://pantanow.vercel.app/"
            textSecondaryBtn="Github"
            urlSecondaryBtn="https://github.com/JonathanPR0/pantanow"
            srcImg={pantanow}
          />
          <Project
            title="Admin Template"
            textPrimaryBtn="Veja Mais"
            urlPrimaryBtn="https://admin-template-cod3r.vercel.app/autentication"
            textSecondaryBtn="Github"
            urlSecondaryBtn="https://github.com/JonathanPR0/admin-template"
            srcImg={adminTemplate}
          />
          <Project
            title="DevFinance"
            // textPrimaryBtn="Veja Mais"
            // urlPrimaryBtn="https://theme-switcher-umber.vercel.app/"
            textSecondaryBtn="Github"
            urlSecondaryBtn="https://github.com/JonathanPR0/devfinance"
            srcImg={devfinance}
          />

          <Project
            title="80s Vibes"
            textPrimaryBtn="Veja Mais"
            urlPrimaryBtn="https://80s-vibes.vercel.app/"
            textSecondaryBtn="Github"
            urlSecondaryBtn="https://github.com/JonathanPR0/80s-Vibes"
            srcImg={vibes80}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
