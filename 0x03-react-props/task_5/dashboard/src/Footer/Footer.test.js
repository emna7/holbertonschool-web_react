import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from '../App/App';
import Footer from './Footer'
import PropTypes from 'prop-types';

configure({adapter: new Adapter()});

describe('Test Footer.js', () => {
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
