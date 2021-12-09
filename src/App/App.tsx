import React, {useState, useEffect} from 'react';
import store, {initialState as storeInitialState} from './store/store';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
//import Button from './components/Button/Button';
import HomePage from './components/HomePage/HomePage';

const initialState = {
  cb: {num: '4977887677543333', exp: '02/22', type: 'visa'},
  ...storeInitialState,
};

const App = () => {
  const [state, setstate] = useState(initialState);
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="transparent" />
      <HomePage
        transactions={state.transactions}
        solde={state.solde}
        action={}
      />
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

export default App;
