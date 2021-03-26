import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import Header from './Header';
import App from '../App/App';
import PropTypes from 'prop-types';

configure({adapter: new Adapter()});

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
});
