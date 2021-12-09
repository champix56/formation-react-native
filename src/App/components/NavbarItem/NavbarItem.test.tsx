/**
 * @format
 */

import 'react-native';
import React from 'react';
import NavbarItem from './NavbarItem';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<NavbarItem />', () => {
  it('NavbarItem render correctly', () => {
    renderer.create(<NavbarItem />);
  });
});
