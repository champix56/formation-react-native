import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text, View} from 'react-native';
//import Button from './components/Button/Button';

import ModalLayout from './components/ModalLayout/ModalLayout';
import Button from './components/Button/Button';
import Navbar from './components/Navbar/Navbar';
import {connect} from 'react-redux';

const App = props => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="transparent" />
      <View style={{flexGrow: 1}}>{props.page}</View>
      <Navbar />
      <ModalLayout>
        <View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'black',
              marginBottom: 5,
            }}>
            <Text>title</Text>
          </View>
          <View
            style={{
              flexGrow: 1,
              borderBottomWidth: 1,
              borderBottomColor: 'black',
              marginBottom: 5,
            }}>
            <Text>Oh breizh ma bro</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button text="ok" onTap={() => {}} bgColor="skyblue" />
            <Button text="cancel" onTap={() => {}} bgColor="skyblue" />
          </View>
        </View>
      </ModalLayout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 60,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  containerHeader: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  card: {
    marginVertical: 8,
    elevation: 3,
  },
  textHeader: {
    color: 'white',
    fontSize: 24,
  },
  text: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
});
function mstp(state, own) {
  return {...own, ...state.navigation};
}
function mdtp() {
  return {};
}
export default connect(mstp, mdtp)(App);
