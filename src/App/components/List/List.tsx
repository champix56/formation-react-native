import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import {styles} from './List.style';

interface ListProps {}
const initialState = {};

const List: React.FC<ListProps> = () => {
  const [state, setstate] = useState(initialState);

  useEffect(() => {
    //didMOunt//didUpdate
    return () => {
      //willUnmount
    };
  }, [state]);

  return (
    <View data-testID="List" style={styles.List}>
      <Text>list</Text>
    </View>
  );
};

export default List;
