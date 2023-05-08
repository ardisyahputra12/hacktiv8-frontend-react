import React from 'react'
import { useParams } from 'react-router-dom'

export const Member = () => {
  const params = useParams()

  return (
    <div>
      <h3>{params.memberName}</h3>
      <p>This is the detail page of {params.memberName}</p>
    </div>
  )
}
