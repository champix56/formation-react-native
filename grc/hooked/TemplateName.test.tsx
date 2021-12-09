/**
 * @format
 */

import 'react-native';
import React from 'react';
import TemplateName from './TemplateName';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<TemplateName />', () => {
  it('TemplateName render correctly', () => {
    renderer.create(<TemplateName />);
  });
});
