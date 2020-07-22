import React from 'react';
import { mount } from 'enzyme';

import Header from '../../components/Header';

describe('Component header test', () => {
  test('header render', () => {
    const header = mount(<Header />);
    expect(header.length).toEqual(1);
  });
});