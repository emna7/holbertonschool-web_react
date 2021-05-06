import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect as expectChai } from 'chai';
import App from '../App/App';
import Header from './Header';
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "../App/AppContext";

describe('Test Header.js', () => {
  const value = { user: user, logOut: logOut};

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Header without crashing', (done) => {
    expectChai(shallow(<AppContext.Provider value={value}><Header/></AppContext.Provider>).exists());
    done();
  });

  it('div with the class App-header', (done) => {
    const wrapper = shallow(<App />);
    expectChai(wrapper.contains(<header className='App-header' />))
    done()
  });

  it('renders 1 img and 1 h1', (done) => {
    const wrapper = mount(<AppContext.Provider value={value}><Header/></AppContext.Provider>);
    expectChai(wrapper.find('img')).to.have.lengthOf(1);
    expectChai(wrapper.find('h1')).to.have.lengthOf(1);
    done();
  });

  it('test that mounts the Header component with a default context value. Verify that the logoutSection is not created', (done) => {
    const wrapper = mount(<AppContext.Provider value={value}><Header/></AppContext.Provider>);
    expectChai(wrapper.find('p#logoutSection')).to.have.lengthOf(0);
    done();
  });

  it('test that mounts the Header component with a user defined (isLoggedIn is true and an email is set). Verify that the logoutSection is created', (done) => {
    value.user.isLoggedIn = true;
    value.user.email = 'test@test.com';
    value.user.password = 'test';
    const wrapper = mount(<AppContext.Provider value={value}><Header/></AppContext.Provider>);
    expectChai(wrapper.find('p#logoutSection')).to.have.lengthOf(1);
    done();
  });

  it('test that mounts the Header component with a user defined (isLoggedIn is true and an email is set) and the logOut is linked to a spy. Verify that clicking on the link is calling the spy', (done) => {
    value.user.isLoggedIn = true;
    value.user.email = 'test@test.com';
    value.user.password = 'test';
    value.logOut = jest.fn();
    const wrapper = mount(<AppContext.Provider value={value}><Header/></AppContext.Provider>);
    wrapper.find("#logoutSection span").simulate("click");
    expect(value.logOut).toHaveBeenCalled();
    done();
  });
});
