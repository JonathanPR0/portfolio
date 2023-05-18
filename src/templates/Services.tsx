import React from 'react'
import Header from '../components/Header'

const Services = () => {
  return (
    <section id='about' className='flex flex-col items-center w-full text-center mt-32 mx-auto'>
      <Header sectionTitle='Services' subtitleText='What I Offer' />
      <div className='grid grid-cols-1 sm:gap-0 lg:grid-cols-12 mx-auto w-11/12 lg:w-10/12 max-w-5xl'></div>
    </section>
  )
}

export default Services