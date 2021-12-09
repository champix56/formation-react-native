/**
 * @format
 */

import 'react-native';
import React from 'react';
import ActionTransact from './ActionTransact';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<ActionTransact />', () => {
  it('ActionTransact render correctly', () => {
    renderer.create(<ActionTransact />);
  });
});
