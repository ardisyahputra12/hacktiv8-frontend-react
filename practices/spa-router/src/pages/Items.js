import React from 'react'
import { getItems } from '../data/items'
import { Outlet } from 'react-router-dom'
import { ItemRow } from '../components/ItemRow'

export const Items = () => {
  const items = getItems()

  return (
    <div>
      <h1>Items Page</h1>
      <p>Select an item to be shown</p>
      <table>
        <tr>
          <th>Item</th>
          <th>Action</th>
        </tr>
        {
          items.map(item => {
            return <ItemRow key={item.id} item={item} />
          })
        }
      </table>

      <Outlet />
    </div>
  )
}
