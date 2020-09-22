import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';

import ResultsMessage from './ResultsMessage';

const mockStore = configureStore([]);
const store = mockStore({
  form: {
    data: {},
    error: false,
    loading: false,
    success: false
  }
});
const loadingStore = mockStore({
  form: {
    data: {},
    error: false,
    loading: true,
    success: false
  }
});
const errorStore = mockStore({
  form: {
    data: {},
    error: true,
    loading: false,
    success: false
  }
});
const successStore = mockStore({
  form: {
    data: {},
    error: false,
    loading: false,
    success: true
  }
});

configure({adapter: new Adapter()});

describe('Results Message Render', () => {
  test('Results Message Renders', () => {
    const component = renderer.create(
      <Provider store={store}>
        <ResultsMessage />
      </Provider>
    );
    
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Results Message Text Render', () => {
  it('Has Correct Search Text On Page Load', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ResultsMessage />
      </Provider>
    );
    const title = getByText('iTunes Search:');
    expect(title).toBeInTheDocument();
  });
  it('Has Correct Search Text On Loading', () => {
    const { getByText } = render(
      <Provider store={loadingStore}>
        <ResultsMessage />
      </Provider>
    );
    const title = getByText('Finding your results...');
    expect(title).toBeInTheDocument();
  });
  it('Has Correct Search Text On Error', () => {

    const { getByText } = render(
      <Provider store={errorStore}>
        <ResultsMessage />
      </Provider>
    );
    
    const title = getByText('Error retrieving your results.');
    expect(title).toBeInTheDocument();
  });
  it('Has Correct Search Text On Success', () => {

    const { getByText } = render(
      <Provider store={successStore}>
        <ResultsMessage />
      </Provider>
    );
    
    const title = getByText('iTunes Search:');
    expect(title).toBeInTheDocument();
  });
});