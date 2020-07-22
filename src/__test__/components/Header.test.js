import React from 'react';
import { mount } from 'enzyme';

import Header from '../../components/Header';

describe('header component test', () => {
  test('header render component', () => {
    const header = mount(<Header />);
    expect(header.length).toEqual(1);
  });
});