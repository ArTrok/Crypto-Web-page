import React, { useState, useEffect } from 'react';

const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

function ConverterComp() {
  const [currencyPrice, setCurrencyPrice] = useState('');
  useEffect(async () => {
    const currencyData = await fetch(URL);
    setCurrencyPrice(currencyData.json);
  }, []);

  return (
    <div>
      ConverterComp
      <div>{currencyPrice}</div>
    </div>
  );
}

export default ConverterComp;
