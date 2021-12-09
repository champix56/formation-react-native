import React from 'react';
import {View} from 'react-native';

import {styles} from './ModalLayout.style';
import store from '../../store/store';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
interface ModalLayoutProps {
  children?: any;
}

const ModalLayout: React.FC<ModalLayoutProps> = props => {
  console.log(store.getState());
  return (
    props.children && (
      <View data-testID="ModalLayout" style={styles.ModalLayout}>
        <View style={styles.content}>{props.children}</View>
      </View>
    )
  );
};
ModalLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
function mapStateToProps(state: any, own: any) {
  return {
    ...own,
    ...state.modal,
  };
}
function mapDispatchToProps() {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalLayout);
export const ModalLayoutDisconnected = ModalLayout;
