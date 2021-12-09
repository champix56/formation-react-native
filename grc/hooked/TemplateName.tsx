import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import {styles} from './TemplateName.style';

interface TemplateNameProps {}
const initialState = {};

const TemplateName: React.FC<TemplateNameProps> = () => {
  const [state, setstate] = useState(initialState);

  useEffect(() => {
    //didMOunt//didUpdate
    setstate({name: 'name'});
    return () => {
      //willUnmount
    };
  }, [state]);

  return (
    <View data-testID="TemplateName" style={styles.TemplateName}>
      <Text>templateName</Text>
    </View>
  );
};

export default TemplateName;
