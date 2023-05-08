import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ItemRow = ({ item }) => {
  const navigate = useNavigate()

  return (
    <tr>
      <td>{item.name}</td>
      <td>
        <button onClick={() => navigate(`${item.id}`)}>Show Detail</button>
      </td>
    </tr>
  )
}
