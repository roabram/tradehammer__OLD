import { createElement } from '../utils/element';

export function createStockElement({ symbol, open, low, close, volume, date }) {
  date = date.substring(0, 10);
  return createElement('div', {
    className: 'stocks-card',
    children: [
      createElement('h2', { innerText: 'symbol: ' + symbol }),
      createElement('p', { innerText: 'Open: ' + open }),
      createElement('p', { innerText: 'Close: ' + close }),
      createElement('p', { innerText: 'Low: ' + low }),
      createElement('p', { innerText: 'Volume: ' + volume }),
      createElement('p', { innerText: 'Date: ' + date }),
    ],
  });
}
