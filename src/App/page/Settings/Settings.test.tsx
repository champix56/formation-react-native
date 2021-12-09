/**
 * @format
 */

import 'react-native';
import React from 'react';
import Settings from './Settings';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<Settings />', () => {
  it('Settings render correctly', () => {
    renderer.create(<Settings />);
  });
});
