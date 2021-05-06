import React from 'react';
import { shallow } from 'enzyme';
import { expect as expectChai } from 'chai';
import App from '../App/App';
import Footer from './Footer';
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "../App/AppContext";

describe('Test Footer.js', () => {
  const value = { user: user, logOut: logOut};

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Footer without crashing', (done) => {
    expectChai(shallow(<AppContext.Provider value={value}><Footer /></AppContext.Provider>).exists());
    done();
  });

  it('div with the class App-footer', (done) => {
    const wrapper = shallow(<App />);
    expectChai(wrapper.contains(<footer className='App-footer' />))
    done();
  });

  it('renders Copyright text', (done) => {
    const wrapper = shallow(<AppContext.Provider value={value}><Footer /></AppContext.Provider>);
    expectChai(wrapper.find(Footer).html()).match(/<footer><p>Copyright*/);
    done();
  });

  it('test to verify that the link is not displayed when the user is logged out within the context', (done) => {
    const wrapper = shallow(<AppContext.Provider value={value}><Footer /></AppContext.Provider>);
    expect(wrapper.find("footer a")).toHaveLength(0);
    done();
  });

  it('test to verify that the link is displayed when the user is logged in within the context', (done) => {
    value.user.isLoggedIn = true;
    const wrapper = shallow(<AppContext.Provider value={value}><Footer /></AppContext.Provider>);
    expect(wrapper.find(Footer).html()).toEqual('<footer><p>Copyright 2021 - Holberton School</p><p id="conctacUs"><a>Contact us</a></p></footer>');
    done();
  });
});
