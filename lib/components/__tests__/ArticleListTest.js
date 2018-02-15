import React from 'react';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Article from '../Article';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

import ArticleList from '../ArticleList';

// import renderer from 'react-test-renderer';

describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: {id: 'a', date: '', title: '', body: ''},
      b: {id: 'b', date: '', title: '', body: ''}
    }
  }
  
  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('ArticleContainer').length).toBe(2);
  })

})