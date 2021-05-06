import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import Enzyme from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login.js';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

it("shouled renders Login componet without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists());
});

it("shouled login render two input tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input")).toHaveLength(2);
    
});

it("shouled login render two label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).toHaveLength(2);
    
});
