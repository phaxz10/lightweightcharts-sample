import { createChart } from 'lightweight-charts';
import './App.css';
import React, { useRef, useEffect } from 'react';
import data from './BTCUSD.json';

function App() {
  const chartContainer = useRef();
  const chart = useRef();

  useEffect(() => {
    chart.current = createChart(chartContainer.current, {
      width: chartContainer.current.offsetWidth,
      height: chartContainer.current.offsetHeight,
    });
    const candleSeries = chart.current.addCandlestickSeries();
    candleSeries.setData(data);

    const handleClick = (param) => {
      if (!param.point) {
        return;
      }
      const price = param.seriesPrices.get(candleSeries);

      alert(price.close);
    };

    chart.current.subscribeClick(handleClick);
  }, []);

  return (
    <div ref={chartContainer} style={{ height: '100vh', width: '100vw' }}>
      {/* <div ref={chartContainer} className='chart-container' /> */}
    </div>
  );
}

export default App;
