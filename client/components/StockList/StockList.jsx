import React from 'react';
import { Collapsible, CollapsibleItem, Tabs, Tab } from 'react-materialize';
import NewsTab from './../NewsTab/NewsTab.jsx';
import Chart from './../Chart/Chart.jsx';


const StockList = (props) => {
  const stockItems = Object.keys(props.stockList).reverse().map((symbol) => {
    console.log(symbol)
    const { diff, open, close, high, low, volume } = props.stockList[symbol];
    return (
      <CollapsibleItem key={`my-${symbol}`} header={`${symbol.toUpperCase()} | ${diff} | Open: ${open} | Close: ${close} | High: ${high} | Low: ${low} | Volume: ${volume}`} >
        <div>
          <Tabs className="tab-demo z-depth-1">
            <Tab title="Chart" active>
              <Chart
                getStockData={props.getStockData}
                symbol={symbol}
              />
            </Tab>
            <Tab title="News">
              <NewsTab
                getNews={props.getNews}
                symbol={symbol}
              />
            </Tab>
          </Tabs>
        </div>
      </CollapsibleItem>
    );
  });

  const title = props.id.split('-').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
  return (
    <div>
      <div className="h3">{title}</div>
      <Collapsible accordion>
        {stockItems}
      </Collapsible>
    </div>
  );
};

export default StockList;
