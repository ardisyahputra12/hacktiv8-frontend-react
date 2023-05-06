import React from 'react'
import { Tdata } from './Tdata'
import { useGetData, useHandleBuy, useHandleSell } from './dataHandler.hook'

export const Tbody = () => {
    const { CAD, EUR, IDR, JPY, CHF, GBP } = useGetData()

    return (
        <tbody>
            <Tdata currency='CAD' exchangeRate={CAD} weBuy={useHandleBuy(CAD)} weSell={useHandleSell(CAD)} />
            <Tdata currency='EUR' exchangeRate={EUR} weBuy={useHandleBuy(EUR)} weSell={useHandleSell(EUR)} />
            <Tdata currency='IDR' exchangeRate={IDR} weBuy={useHandleBuy(IDR)} weSell={useHandleSell(IDR)} />
            <Tdata currency='JPY' exchangeRate={JPY} weBuy={useHandleBuy(JPY)} weSell={useHandleSell(JPY)} />
            <Tdata currency='CHF' exchangeRate={CHF} weBuy={useHandleBuy(CHF)} weSell={useHandleSell(CHF)} />
            <Tdata currency='GBP' exchangeRate={GBP} weBuy={useHandleBuy(GBP)} weSell={useHandleSell(GBP)} />
        </tbody>
    )
}
