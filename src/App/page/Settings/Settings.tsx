import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

import {styles} from './Settings.style';

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = props => {
  return (
    <View data-testID="Settings" style={styles.Settings}>
      <Text>settings</Text>
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
export default connect(mapsStateToProps, mapDipspatchToProps)(Settings);
