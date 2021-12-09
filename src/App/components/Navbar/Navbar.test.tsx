/**
 * @format
 */

import 'react-native';
import React from 'react';
import Navbar from './Navbar';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<Navbar />', () => {
  it('Navbar render correctly', () => {
    renderer.create(<Navbar />);
  });
});
