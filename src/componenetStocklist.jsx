import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Stocklist = () => {
  const [data, setData] = useState([]);
  const [watchList, setWatchList] = useState(['GOOGL', 'MSFT', 'AMZN']);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          axios.get('https://finnhub.io/api/v1/quote?symbol=MSFT&token=cc26pu2ad3icrd10orqg'),
          axios.get('https://finnhub.io/api/v1/quote?symbol=GOOGL&token=cc26pu2ad3icrd10orqg'),
          axios.get('https://finnhub.io/api/v1/quote?symbol=AMZN&token=cc26pu2ad3icrd10orqg')
        ]);

        const data = responses.map((response, index) => {
          return {
            name: watchList[index], // Use the watchlist to get the corresponding stock name
            last: response.data.c,
            change: response.data.d,
            changePercent: response.data.dp,
            high: response.data.h,
            low: response.data.l,
            open: response.data.o,
            close: response.data.pc
          };
        });

        if (isMounted) {
          setData(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Clean up function to prevent setting state on unmounted component
    return () => {
      isMounted = false;
    };
  }, []); // Adding watchList as a dependency to trigger useEffect when watchList changes

  return (
    <div>
      <table className='table hover mt-5'>
        <thead style={{ color: "rgb(79, 88, 104)" }}>
          <tr>
            <th itemScope="col">Name</th>
            <th itemScope="col">Last</th>
            <th itemScope="col">Change</th>
            <th itemScope="col">Change%</th>
            <th itemScope="col">High</th>
            <th itemScope="col">Low</th>
            <th itemScope="col">Open</th>
            <th itemScope="col">Close</th>
          </tr>
        </thead>
        <tbody>
          {data.map((stockData, index) => (
            <tr className='table-row' key={index}>
              <th scope='row'>{stockData.name}</th>
              <td>{stockData.last}</td>
              <td>{stockData.change}</td>
              <td>{stockData.changePercent}</td>
              <td>{stockData.high}</td>
              <td>{stockData.low}</td>
              <td>{stockData.open}</td>
              <td>{stockData.close}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stocklist;
