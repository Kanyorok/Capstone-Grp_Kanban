import { JSDOM } from 'jsdom';
import totalComments from '../src/modules/commentCounter.js';

describe('totalComments', () => {
  let dom;

  beforeEach(() => {
    dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', { runScripts: 'dangerously' });
    global.document = dom.window.document;
  });

  test('should output the total number of comments', () => {
    // Arrange
    document.body.innerHTML = `
        <span class="commentsCounter">4</span>
    `;

    const info = [
      { item_id: 1, username: 'Robert', comment: 'wonderful movie to watch' },
      { item_id: 2, username: 'Peter', comment: 'Beautiful movie' },
      { item_id: 3, username: 'Emmanuel', comment: 'Great movie' },
      { item_id: 4, username: 'Alex', comment: 'wonderful film' },
    ];

    // Action
    totalComments(info);

    // Assert
    expect(document.querySelector('.commentsCounter').innerHTML).toBe('4');
  });

  test('should set the comments counter to 0 if there are no comments', () => {
    // Arrange
    document.body.innerHTML = `
        <span class="commentsCounter">4</span>
    `;

    const info = [];

    // Action
    totalComments(info);

    // Assertions
    expect(document.querySelector('.commentsCounter').innerHTML).toBe('0');
  });

  afterEach(() => {
    global.document = undefined;
    dom.window.close();
  });
});
