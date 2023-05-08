import React from 'react'
import { CardGeneral } from '../components/CardGeneral'
import { educations } from '../data/education.data'

export const Education = () => {
  return (
    <>
      <h2 className='text-center mb-5' id="education">Education</h2>
      {
        educations.map(education => {
          return <CardGeneral {...education} key={education.id} />
        }).reverse()
      }
    </>
  )
}
