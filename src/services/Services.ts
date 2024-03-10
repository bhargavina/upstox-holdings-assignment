import axios from 'axios';
import {urls} from '../constants/Urls';

export async function getStocks() {
  const result = await axios.get(urls.stocks);
  return result.data;
}
