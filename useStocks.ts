import {useEffect, useState} from 'react';
import {HoldingItem} from './App';
import {getStocks} from './src/services/Services';

export function useStocks() {
  const [isLoading, setIsLoading] = useState(false);
  const [stocksList, setStocksList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getStocks()
      .then(result => {
        setStocksList(result.userHolding);
      })
      .catch(err => console.error('Fetch error: ', err))
      .finally(() => setIsLoading(false));
  }, []);

  const totalCurrentValue = stocksList.reduce(
    (sum: number, currentItem: HoldingItem) =>
      sum + currentItem.ltp * currentItem.quantity,
    0,
  );

  const totalInvestmentValue = stocksList.reduce(
    (sum: number, currentItem: HoldingItem) =>
      sum + currentItem.avgPrice * currentItem.quantity,
    0,
  );

  const totalPlValue = totalCurrentValue - totalInvestmentValue;

  const todayPAndL = stocksList.reduce(
    (sum: number, currentItem: HoldingItem) =>
      sum + (currentItem.close - currentItem.ltp) * currentItem.quantity,
    0,
  );

  return {
    isLoading,
    stocksList,
    totalCurrentValue,
    totalInvestmentValue,
    totalPlValue,
    todayPAndL,
  };
}
