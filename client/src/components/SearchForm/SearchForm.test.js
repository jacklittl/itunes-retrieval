import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import SearchForm from './SearchForm';

const mockStore = configureStore([]);
const store = mockStore({
  query: {
    media: "",
    term: ""
  }
});

configure({adapter: new Adapter()});

describe('Search Form Render', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    );
    
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});