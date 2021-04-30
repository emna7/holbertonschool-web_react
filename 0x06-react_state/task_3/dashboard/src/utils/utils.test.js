import { getFullYear, getFooterCopy, getLatestNotification } from './utils';


describe('Test - utils.test.js', () => {
  it('Year returns current year', () => {
    expect(getFullYear()).toBe( new Date().getFullYear());
  });

  it('getFooterCopy case 1', () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
  });

  it('getFooterCopy case 2', () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });

  it('getLatestNotification works', () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
  });
});
