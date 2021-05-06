import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App/App';
import Footer from './Footer';
import { StyleSheetTestUtils } from "aphrodite";

describe('Test Footer.js', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Footer without crashing', (done) => {
    expect(shallow(<Footer />).exists());
    done();
  });

  it('div with the class App-footer', (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<footer className='App-footer' />))
    done();
  });

  it('renders Copyright text', (done) => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text('Copyright')).contain('Copyright');
    done();
  });
});
