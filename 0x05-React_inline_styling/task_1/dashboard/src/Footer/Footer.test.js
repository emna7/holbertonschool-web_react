import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from './Footer.js';

it("shouled renders Footer componet without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
});

it("shouled renders a spesific string", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.children('p').html()).to.include('Copyright');
});

it("<Footer /> renders at least the text: Copyright", () => {
    const wrapper = shallow(<Footer />);
	expect(wrapper.children('p').html()).to.include('Copyright');
});
