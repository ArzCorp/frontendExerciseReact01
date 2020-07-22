import React from 'react';
import { mount } from 'enzyme';

import ArticlesLeft from '../../components/ArticlesLeft';

describe('Component articles left tests', () => {
  test('Article Left render', () => {
    const articlesLeft = mount(<ArticlesLeft />);
    expect(articlesLeft.length).toEqual(1);
  });
});