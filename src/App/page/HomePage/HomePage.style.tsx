import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  HomePage: {
    flex: 1,
    paddingVertical: 24,
  },
  header: {
    alignItems: 'center',
  },
  imgHeader: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#d2dae2',
    borderRadius: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 1.5,
    //elevation: 50,
    shadowColor: 'black',
    padding: 3,
    width: '70%',
  },
  containerButtons: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  container: {
    width: 300,
    height: 50,
    alignSelf: 'center',
    marginVertical: 12,
    backgroundColor: 'blue',
  },
  header2: {
    marginTop: 16,
    backgroundColor: 'white',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 1.5,
    //elevation: 5,
    shadowColor: 'black',
  },
  solde: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 8,
  },
});
