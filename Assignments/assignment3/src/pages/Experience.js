import React from 'react'
import { CardGeneral } from '../components/CardGeneral'
import { experiences } from '../data/experience.data'

export const Experience = () => {
  return (
    <>
      <h2 className='text-center mb-5' id="experience">Experience</h2>
      {
        experiences.map(experience => {
          return <CardGeneral {...experience} key={experience.id} />
        }).reverse()
      }
    </>
  )
}
