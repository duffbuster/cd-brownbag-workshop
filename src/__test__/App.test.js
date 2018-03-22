import React from 'react';

import {mount, shallow} from "enzyme";

import toJson from 'enzyme-to-json';

import App from '../App';

describe('App', () => {
  it('should render', () => {
    mount(< App / >);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<App/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
