import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from "react";
import { shallow } from "enzyme";
import NotificationItem from './NotificationItem';
import { expect } from 'chai';

it('shouled renders the component without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists());
});

it('shouled renders the correct html while passig type or value propos', () => {
    const props = {
        type: "default",
        value: "New resume",
        html: undefined,
    };
    const wrapper = shallow(<NotificationItem {...props} />);
    expect(wrapper.contains(<li data-notification-type={props.type} dangerouslySetInnerHTML={undefined}>New resume</li>)).equal(false);
});

it('shouled renders the correct html code while ppassing HTML props', () => {
    const props = {
        type: "urgent",
        html: { __html: "<p>test</p>"},
    };
    const wrapper = shallow(<NotificationItem {...props} />);
    expect(wrapper.contains(<li data-notification-type={props.type} dangerouslySetInnerHTML={props.html} />)).to.equal(true);
});
