import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils', () => {
  test('getFullYear returns correct year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  });

  test('getFooterCopy returns correct string if isIndex is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('getFooterCopy returns correct string id isIndex is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School Main Dashboard');
  });

  test('getLatestNotification returns correct string', () => {
    expect(getLatestNotification()).toBe(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });
});
