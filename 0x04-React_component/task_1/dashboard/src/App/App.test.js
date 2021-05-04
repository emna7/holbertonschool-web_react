import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import Enzyme from 'enzyme';
import { expect } from 'chai';
import CourseList from '../CourseList/CourseList';

it("should renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists());
});

it("shouled contains Notification component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Notifications />)).equal(false);
});

it("shouled contains Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).equal(true);
});

it("shouled contains Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).equal(true);
});

it("shouled contains Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).equal(true);
});

it("shouled not display CourseList", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<CourseList />)).equal(false);
});

describe("when the isLoggedIn is true The first one should verify that the Login component is not included. The second one should verify that the CourseList component is included", () => {
    it("shouled not include Login", () => {
        const props = {
            isLoggedIn: true,
        };
        const wrapper = shallow(<App {...props}/>);
        expect(wrapper.contains(<Login />)).equal(false);
    });
    it("shouled include CourseListe", () => {
        const props = {
            isLoggedIn: true,
        };
        const wrapper = shallow(<App {...props}/>);
        expect(wrapper.contains(<CourseList />)).equal(false);
    });
});

describe("Testing the <App /> when isLoggedIn is true", () => {

	let props = {
		isLoggedIn: true,
	};

	let component = shallow(<App {...props} />);

	expect(component.contains(<Login />)).to.equal(false);
	expect(component.find(CourseList)).to.have.lengthOf(1);
});

test('if logged in, course list is displayed and login form is NOT', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);

    const login = wrapper.find(Login);
    const courseList = wrapper.find(CourseList);

    expect(login).to.have.lengthOf(0);
    expect(courseList).to.have.lengthOf(1);
  });
  test('logOut alerts with correct string', () => {
    const myLogOut = jest.fn(() => undefined);
    const myAlert = jest.spyOn(global, 'alert');

    const wrapper = shallow(<App logOut={myLogOut} />)

    expect(myAlert);
    expect(myLogOut);
    jest.restoreAllMocks();
  });
