import React from 'react'
import { FiFigma } from 'react-icons/fi'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { TbBrandCss3 } from 'react-icons/tb'
import { DiJavascript1 } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'
import Card from '../components/Card'
import Header from '../components/Header'
import { FaNodeJs, FaReact } from 'react-icons/fa'

const Experience = () => (
  <section id='experience' className='flex flex-col items-center w-full text-center mt-32 mx-auto'>
    <Header sectionTitle='My Experience' subtitleText='What Skils I Have' />
    <div className='w-11/12 lg:w-10/12 max-w-5xl'>
      <div className='flex items-center justify-center flex-wrap mx-auto gap-4 w-full'>
        <Card title='UI/UX' smallText='Intermediate' iconClass='text-2xl' cardClass=" w-[43%] md:w-[30%] lg:w-[23%] ">
          <FiFigma />
        </Card>
        <Card title='HTML' smallText='Experienced' iconClass='text-2xl' cardClass=" w-[43%] md:w-[30%] lg:w-[23%] ">
          <AiOutlineHtml5 />
        </Card>
        <Card title='CSS' smallText='Experienced' iconClass='text-2xl' cardClass=" w-[43%] md:w-[30%] lg:w-[23%] ">
          <TbBrandCss3 />
        </Card>
        <Card title='Javascript' smallText='Intermediate' iconClass='text-2xl' cardClass=" w-[43%] md:w-[30%] lg:w-[23%] ">
          <DiJavascript1 />
        </Card>
        <Card title='Node JS' smallText='Intermediate' iconClass='text-2xl' cardClass=" w-[43%] md:w-[30%] lg:w-[23%] ">
          <FaNodeJs />
        </Card>
        <Card title='React' smallText='Intermediate' iconClass='text-2xl' cardClass=" w-[43%] md:w-[30%] lg:w-[23%] ">
          <FaReact />
        </Card>
        <Card title='Tailwind' smallText='Intermediate' iconClass='text-2xl' cardClass=" w-[43%] md:w-[30%] lg:w-[23%] ">
          <SiTailwindcss />
        </Card>
      </div>
    </div>
  </section>
)

export default Experience