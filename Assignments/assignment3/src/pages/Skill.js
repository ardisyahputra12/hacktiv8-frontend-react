import React from 'react'
import { skills } from '../data/skill.data'
import { CardSkill } from '../components/CardSkill'

export const Skill = () => {
  return (
    <>
      <h2 className='text-center mb-5' id="skill">Skills</h2>
      <CardSkill title='Language' skills={skills.language} />
      <CardSkill title='Framework' skills={skills.framework} />
      <CardSkill title='Database' skills={skills.database} />
      <CardSkill title='Util' skills={skills.util} />
    </>
  )
}
