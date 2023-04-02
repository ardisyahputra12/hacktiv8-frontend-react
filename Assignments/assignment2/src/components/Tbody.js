import React, { useEffect, useState } from 'react';
import { Tdata } from './Tdata';

export const Tbody = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=378db31476a44c1094fda6d6c78d91a3')
            .then(response => response.json())
            .then(responseJson => setData(responseJson['rates']))
            .catch(err => console.log(err));
    }, []);

    return (
        <tbody>
            <Tdata currency='CAD' exchangeRate={data["CAD"]} weBuy={data["CAD"] + (data["CAD"] * 0.05)} weSell={data["CAD"] - (data["CAD"] * 0.05)} />
            <Tdata currency='EUR' exchangeRate={data["EUR"]} weBuy={data["EUR"] + (data["EUR"] * 0.05)} weSell={data["EUR"] - (data["EUR"] * 0.05)} />
            <Tdata currency='IDR' exchangeRate={data["IDR"]} weBuy={data["IDR"] + (data["IDR"] * 0.05)} weSell={data["IDR"] - (data["IDR"] * 0.05)} />
            <Tdata currency='JPY' exchangeRate={data["JPY"]} weBuy={data["JPY"] + (data["JPY"] * 0.05)} weSell={data["JPY"] - (data["JPY"] * 0.05)} />
            <Tdata currency='CHF' exchangeRate={data["CHF"]} weBuy={data["CHF"] + (data["CHF"] * 0.05)} weSell={data["CHF"] - (data["CHF"] * 0.05)} />
            <Tdata currency='GBP' exchangeRate={data["GBP"]} weBuy={data["GBP"] + (data["GBP"] * 0.05)} weSell={data["GBP"] - (data["GBP"] * 0.05)} />
        </tbody>
    )
}
