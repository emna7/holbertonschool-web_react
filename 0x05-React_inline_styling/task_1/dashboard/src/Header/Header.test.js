import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';
import Enzyme from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

it("shouled renders Header componet without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists());
});

it("shouled renders a spesific string", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.contains(<h1> School dashbord </h1>)).toEqual(false);
});

it("shouled Header render img tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img")).toHaveLength(1);
    
});
