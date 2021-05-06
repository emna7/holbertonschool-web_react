import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe;
describe("Utils functions", () => {
  test("getFullYear returns the correct year", () => {
    expect(getFullYear()).toEqual(2021);
  });

  test("getFullYear returns the correct string when the argument is true ", () => {
    expect(getFooterCopy(true)).toEqual("Holberton School");
  });
  test("getFooterCopy returns the correct string when the argument is false", () => {
    expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
  });
  test("getLatestNotification returns the expected string", () => {
    expect(getLatestNotification()).toEqual(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });
});
