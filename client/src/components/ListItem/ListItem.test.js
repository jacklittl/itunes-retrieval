import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import ListItem from './list-item';

configure({adapter: new Adapter()});

describe('List Item Render', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
        <ListItem
            key={result.trackId}
            result={result}
        />
    );
    
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});