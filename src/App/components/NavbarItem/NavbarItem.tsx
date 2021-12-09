import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackgroundBase,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {styles} from './NavbarItem.style';

interface NavbarItemProps {
  icon?: string;
  text: string;
  selected?: boolean;
  action: Function;
}
const NavbarItem: React.FC<NavbarItemProps> = props => {
  return (
    <View
      data-testID="NavbarItem"
      style={{
        ...styles.NavbarItem,
        backgroundColor: props.selected ? '#AE0' : 'white',
      }}>
      <TouchableOpacity onPress={() => props.action()}>
        {props.icon && (
          <Image
            source={{uri: props.icon}}
            style={styles.icon}
            resizeMode="contain"
          />
        )}
        <Text>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavbarItem;
