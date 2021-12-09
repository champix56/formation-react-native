/**
 * @format
 */

import 'react-native';
import React from 'react';
import List from './List';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<List />', () => {
  it('List render correctly', () => {
    renderer.create(<List />);
  });
});
