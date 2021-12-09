import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Transaction: {
    width: '90%',
    height: 50,
    marginVertical: 8,
    borderColor: 'black',
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 8,
    flexDirection: 'row',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 1.5,
    elevation: 5,
    shadowColor: 'black',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  libelle: {
    fontSize: 16,
    color: 'black',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
