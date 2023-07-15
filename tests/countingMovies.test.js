import { JSDOM } from 'jsdom';
import { countItems } from '../src/modules/countingMovies.js';

describe('countItems', () => {
  let dom;

  beforeEach(() => {
    dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', { runScripts: 'dangerously' });
    global.document = dom.window.document;
  });

  test('should update counter with the number of items', () => {
    // Arrange
    document.body.innerHTML = '<div class="counter"></div>';
    const items = [{ id: 1 }, { id: 2 }, { id: 3 }];

    // Act
    countItems(items);

    // Assert
    const counter = document.querySelector('.counter');
    expect(counter.textContent).toEqual('3');
  });

  test('should update counter with 0 when there are no items', () => {
    // Arrange
    document.body.innerHTML = '<div class="counter"></div>';
    const items = [];

    // Act
    countItems(items);

    // Assert
    const counter = document.querySelector('.counter');
    expect(counter.textContent).toEqual('0');
  });
});
