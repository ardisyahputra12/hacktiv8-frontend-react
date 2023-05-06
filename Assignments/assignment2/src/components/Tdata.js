import React from 'react'
import PropTypes from 'prop-types'

export const Tdata = ({ currency, weBuy, exchangeRate, weSell }) => {
  return (
    <tr>
      <td>{currency}</td>
      <td>{weBuy}</td>
      <td>{exchangeRate}</td>
      <td>{weSell}</td>
    </tr>
  )
}

Tdata.propTypes = {
  currency: PropTypes.string.isRequired,
  weBuy: PropTypes.number.isRequired,
  exchangeRate: PropTypes.number.isRequired,
  weSell: PropTypes.number.isRequired,
}