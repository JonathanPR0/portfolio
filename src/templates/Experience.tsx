import { FaAws, FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { MdUpdate } from "react-icons/md";
import {
  SiExpress,
  SiMongodb,
  SiServerless,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Card from "../components/Card";
import Header from "../components/Header";

const Experience = () => (
  <section className="flex flex-col items-center w-full text-center mt-32 mx-auto experience">
    <Header sectionTitle="Minha Experiência" subtitleText="Quais as Minhas Skils" />
    <div className="w-11/12 lg:w-10/12 max-w-5xl">
      <div className="flex items-center justify-center flex-wrap mx-auto gap-4 w-full">
        <Card
          title="UI/UX"
          smallText="Intermediário"
          iconClass="text-2xl"
          cardClass=" w-[43%] md:w-[30%] lg:w-[23%] "
        >
          <FiFigma />
        </Card>
        <Card
          title="Express"
          smallText="Intermediário"
          iconClass="text-2xl"
          cardClass=" w-[43%] md:w-[30%] lg:w-[23%] "
        >
          <SiExpress />
        </Card>
        <Card
          title="Typescript"
          smallText="Intermediário"
          iconClass="text-2xl"
          cardClass=" w-[43%] md:w-[30%] lg:w-[23%] "
        >
          <SiTypescript />
        </Card>
        <Card
          title="React"
          smallText="Experiente"
          iconClass="text-2xl"
          cardClass=" w-[43%] md:w-[30%] lg:w-[23%] "
        >
          <FaReact />
        </Card>
        <Card
          title="Tailwind"
          smallText="Experiente"
          iconClass="text-2xl"
          cardClass=" w-[43%] md:w-[30%] lg:w-[23%] "
        >
          <SiTailwindcss />
        </Card>
        <Card
          title="Next.js"
          smallText="Intermediário"
          iconClass="text-2xl"
          cardClass=" w-[43%] md:w-[30%] lg:w-[23%] "
        >
          <TbBrandNextjs />
        </Card>
        <Card
          title="MongoDB"
          smallText="Intermediário"
          iconClass="text-2xl"
          cardClass=" w-[43%] md:w-[30%] lg:w-[23%] "
        >
          <SiMongodb />
        </Card>
        <Card
          title="Springboot"
          smallText="Básico"
          iconClass="text-2xl"
          cardClass=" w-[43%] md:w-[30%] lg:w-[23%] "
        >
          <SiSpringboot />
        </Card>
        <Card
          title="AWS"
          smallText="Intermediário"
          iconClass="text-2xl"
          cardClass=" w-[43%] md:w-[30%] lg:w-[23%] "
        >
          <FaAws />
        </Card>
        <Card
          title="Serverless"
          smallText="Intermediário"
          iconClass="text-2xl"
          cardClass=" w-[43%] md:w-[30%] lg:w-[23%] "
        >
          <SiServerless />
        </Card>
        <Card
          title="CI/CD"
          smallText="Intermediário"
          iconClass="text-2xl"
          cardClass=" w-[43%] md:w-[30%] lg:w-[23%] "
        >
          <MdUpdate />
        </Card>
      </div>
    </div>
  </section>
);

export default Experience;
