/**
 * @format
 */

import 'react-native';
import React from 'react';
import ModalLayout from './ModalLayout';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<ModalLayout />', () => {
  it('ModalLayout render correctly', () => {
    renderer.create(<ModalLayout />);
  });
});
