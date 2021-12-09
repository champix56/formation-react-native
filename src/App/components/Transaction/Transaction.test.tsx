/**
 * @format
 */

import 'react-native';
import React from 'react';
import Transaction from './Transaction';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<Transaction />', () => {
  it('Transaction render correctly', () => {
    renderer.create(<Transaction />);
  });
});
