import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import Listing from './listing';

configure({adapter: new Adapter()});

describe('Listing Render', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
        <Listing results={resultsPayload} />
    );
    
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});