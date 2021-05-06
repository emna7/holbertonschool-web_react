import Footer from "./Footer.js";
import React from "react";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { shallow, configure } from "enzyme";
import AppContext from "../App/AppContext";
import { user, logOut } from "../App/AppContext";

Enzyme.configure({ adapter: new Adapter() });
describe("<Footer />", () => {
  it("Test 1 <Footer /> renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });

  it("logged out within the context", () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("footer a"));
  });
});
