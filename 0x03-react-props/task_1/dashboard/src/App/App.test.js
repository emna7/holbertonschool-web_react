import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

configure({adapter: new Adapter()});

describe("test App", () => {
    it("renders without crashing", () => {
        shallow(<App />);
    });
    const wrapper = shallow(<App />);
    it("Notifications", () => {
        shallow(<Notifications />);

    });
    it("Header", () => {
        shallow(<Header />);
    });
    it("Login", () => {
        shallow(<Login />);
    });
    it("Footer", () => {
        shallow(<Footer />);
    });
});
