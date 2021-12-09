import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

import {styles} from './TemplateName.style';

interface TemplateNameProps {}

const TemplateName: React.FC<TemplateNameProps> = props => {
  return (
    <View data-testID="TemplateName" style={styles.TemplateName}>
      <Text>templateName</Text>
      <Text>{JSON.stringify(props)}</Text>
    </View>
  );
};
function mapsStateToProps(state: any, own: any) {
  return {...own, ...state};
}
function mapDipspatchToProps(dispatch: Function) {
  return {};
}
export default connect(mapsStateToProps, mapDipspatchToProps)(TemplateName);
