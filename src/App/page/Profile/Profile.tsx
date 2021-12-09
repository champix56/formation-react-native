import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

import {styles} from './Profile.style';

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = props => {
  return (
    <View data-testID="Profile" style={styles.Profile}>
      <Text>profile</Text>
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
export default connect(mapsStateToProps, mapDipspatchToProps)(Profile);
