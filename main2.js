import { createElement, removeAllChildren } from '/utils/element';
import { getStocks } from '/utils/api';
import { debounce } from '../utils/timer';
import { createStockElement } from '../utils/stocks';

const stockSection = createElement('section', {
  className: 'resultSection',
});

getStocks().then((stocks) => {
  const stockElements = stocks.map(createStockElement);
  stockSection.append(...stockElements);
});

const header = createElement('header', {
  className: 'header',
  children: [
    createElement('input', {
      className: 'input',
      placeholder: 'Type in your symbol.....',
      autofocus: true,
      oninput: debounce((event) => {
        removeAllChildren(stockSection);

        const search = event.target.value;
        getStocks(search).then((stocks) => {
          const stockElements = stocks.map(createStockElement);
          stockSection.append(...stockElements);
        });
      }),
    }),
  ],
});
const mainElement = createElement('main', {
  className: 'main',
  children: [
    createElement('h1', { innerText: 'List your stocks ' }),
    createElement('span', {
      innerText:
        'Im Grunde sind dem Käufer die Kurse immer zu hoch und dem Verkäufer immer zu niedrig. - Hermann Josef Abs',
    }),
  ],
});
stockSection, document.querySelector('#app').append(header);
document.querySelector('#app').append(mainElement);
