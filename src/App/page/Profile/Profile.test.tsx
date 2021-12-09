/**
 * @format
 */

import 'react-native';
import React from 'react';
import Profile from './Profile';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<Profile />', () => {
  it('Profile render correctly', () => {
    renderer.create(<Profile />);
  });
});
