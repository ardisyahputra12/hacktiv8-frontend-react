import { useEffect, useState } from "react"

export const useHandleBuy = (curr) => {
    return Number(Number.parseFloat(curr + (curr * 0.05)).toFixed(4))
}

export const useHandleSell = (curr) => {
    return Number(Number.parseFloat(curr - (curr * 0.05)).toFixed(4))
}

export const useGetData = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=378db31476a44c1094fda6d6c78d91a3')
            .then(response => response.json())
            .then(responseJson => setData(responseJson['rates']))
            .catch(err => console.log(err))
    }, [])

    const CAD = Number(Number.parseFloat(data && data['CAD']).toFixed(6)) || 0
    const EUR = Number(Number.parseFloat(data && data['EUR']).toFixed(6)) || 0
    const IDR = Number(Number.parseFloat(data && data['IDR']).toFixed(6)) || 0
    const JPY = Number(Number.parseFloat(data && data['JPY']).toFixed(6)) || 0
    const CHF = Number(Number.parseFloat(data && data['CHF']).toFixed(6)) || 0
    const GBP = Number(Number.parseFloat(data && data['GBP']).toFixed(6)) || 0

    return { CAD, EUR, IDR, JPY, CHF, GBP }
}
