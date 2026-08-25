import fibsIterate from './fibsIterate';

describe('fibsIterate', () => {
  test('returns the first n numbers in the Fibonacci sequence', () => {
    expect(fibsIterate(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test('returns an empty array when n is 0', () => {
    expect(fibsIterate(0)).toEqual([]);
  });
});
