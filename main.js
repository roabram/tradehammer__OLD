import { createElement, removeAllChildren } from './utils/element';
import { getStocks } from './utils/api';
import { debounce } from './utils/timer';
import { createStockElement } from './components/stocks';
import './style.css';

const stockSection = createElement('section', {
  className: 'resultsSection',
});

getStocks().then((stocks) => {
  const stockElements = stocks.map(createStockElement);
  stockSection.append(...stockElements);
});

const mainElement = createElement('main', {
  className: 'main',
  children: [
    createElement('header', {
      className: 'hero',
      children: [
        createElement('h1', {
          className: 'hero__title',
          innerText: 'Stocks!',
        }),
        createElement('input', {
          className: 'input',
          placeholder: 'Type in your Symbol....',
          autofocus: true,
          oninput: debounce((event) => {
            removeAllChildren(stockSection);

            const search = event.target.value;
            getStocks(search).then((stocks) => {
              const stockElements = stocks.map(createStockElement);
              stockSection.append(...stockElements);
            });
          }, 300),
        }),
      ],
    }),
    stockSection,

    createElement('footer', {
      className: 'footer',
      children: [
        createElement('small', {
          className: 'footer__trademark',
          children: [
            createElement('span', {
              innerText: 'Daten vom 26.04.21 - 06.05.21 // newest up',
            }),
          ],
        }),
      ],
    }),
  ],
});

document.querySelector('#app').append(mainElement);
