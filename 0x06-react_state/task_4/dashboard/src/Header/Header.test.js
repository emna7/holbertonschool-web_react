import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import Header from './Header';
import App from '../App/App';
import PropTypes from 'prop-types';
import { StyleSheetTestUtils } from 'aphrodite';

configure({adapter: new Adapter()});

StyleSheetTestUtils.suppressStyleInjection();

describe('Test Header.js', () => {
  it('Header without crashing', (done) => {
    expect(shallow(<Header />).exists());
    done();
  });

  it('div with the class App-header', (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<header className='App-header' />))
    done()
  });

  it('renders 1 img and 1 h1', (done) => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).to.have.lengthOf(1);
    expect(wrapper.find('h1')).to.have.lengthOf(1);
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
