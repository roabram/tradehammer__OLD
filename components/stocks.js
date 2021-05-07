import { createElement } from '../utils/element';

export function createStockElement({ symbol, open, low, close, volume }) {
  return createElement('div', {
    className: 'stocks-card',
    children: [
      createElement('h2', { innerText: symbol }),
      createElement('p', { innerText: open }),
      createElement('p', { innerText: close }),
      createElement('p', { innerText: low }),
      createElement('p', { innerText: volume }),
    ],
  });
}
