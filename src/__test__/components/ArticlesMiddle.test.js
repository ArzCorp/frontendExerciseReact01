import React from 'react';
import { mount } from 'enzyme';

import ArticlesMiddle from '../../components/ArticleMiddle';

describe('component articles middle tests', () => {
  test('Article middle render', () => {
    const articlesMiddle = mount(<ArticlesMiddle />);
    expect(articlesMiddle.length).toEqual(1);
  });
});