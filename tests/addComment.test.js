import { addComment, showCommentsVals } from "../src/modules/addComment";

// Mock fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]),
  })
);

describe('addComment', () => {
  test('should add a comment successfully', async () => {
    // Set up the necessary elements and values
    document.body.innerHTML = `
      <input type="text" class="userName" value="Jane">
      <input type="text" class="movieComment" value="Great movie">
    `;
    const event = {
      preventDefault: jest.fn(),
      target: {
        getAttribute: jest.fn(),
      },
    };

    // Call the addComment function
    await addComment(event);

    // Assertions
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(expect.any(String), expect.any(Object));
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(document.querySelector('.userName').value).toBe('');
    expect(document.querySelector('.movieComment').value).toBe('');
    // You can add more assertions based on your specific use case
  });
});

describe('showCommentsVals', () => {
  test('should fetch and display comments successfully', async () => {
    // Set up the necessary elements and values
    document.body.innerHTML = `
      <div class="showComments"></div>
      <div class="commentsCounter"></div>
    `;

    // Call the showCommentsVals function
    await showCommentsVals();

    // Assertions
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(expect.any(String));
    // You can add more assertions based on your specific use case
  });
});
