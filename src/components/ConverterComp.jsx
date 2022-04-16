import React, { useState, useEffect } from 'react';
// https://api.coindesk.com/v1/bpi/currentprice.json ---- api to be fetched
const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

function ConverterComp() {
  const [currencyPrice, setCurrencyPrice] = useState('');
  useEffect(async () => {
    const currencyData = await fetch(URL);
  }, []);

  return (
    <div>ConverterComp</div>
  );
}

export default ConverterComp;
