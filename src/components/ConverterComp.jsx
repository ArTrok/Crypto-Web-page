import React, { useState, useEffect } from 'react';

//   {
//     "name": "State",
//     "value": {
//       "time": {
//         "updated": "May 24, 2022 23:38:00 UTC",
//         "updatedISO": "2022-05-24T23:38:00+00:00",
//         "updateduk": "May 25, 2022 at 00:38 BST"
//       },
//       "disclaimer": "This data was produced from the CoinDesk Bitcoin" +
//                    + "Price Index (USD). Non-USD currency data converted" +
//                    + "using hourly conversion rate from openexchangerates.org",
//       "chartName": "Bitcoin",
//       "bpi": {
//         "USD": {
//           "code": "USD",
//           "symbol": "&#36;",
//           "rate": "29,632.4059",
//           "description": "United States Dollar",
//           "rate_float": 29632.4059
//         },
//         "GBP": {
//           "code": "GBP",
//           "symbol": "&pound;",
//           "rate": "23,727.7638",
//           "description": "British Pound Sterling",
//           "rate_float": 23727.7638
//         },
//         "EUR": {
//           "code": "EUR",
//           "symbol": "&euro;",
//           "rate": "28,045.8572",
//           "description": "Euro",
//           "rate_float": 28045.8572
//         }
//       }
//     }

const URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

function ConverterComp() {
  const [currencyPrice, setCurrencyPrice] = useState('');

  async function callFetch() {
    const currencyData = await fetch(URL);
    setCurrencyPrice(await currencyData.json());
  }

  useEffect(async () => {
    await callFetch();
  }, []);

  return (
    <div>
      ConverterComp
      <div>{currencyPrice.bpi.USD.rate_float}</div>
    </div>
  );
}

export default ConverterComp;
