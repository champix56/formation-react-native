import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  ModalLayout: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ACACACF0',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  content: {
    backgroundColor: 'white',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 1.5,
    elevation: 1000,
    shadowColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
