import React, {ReactNode} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './Button.style';

interface ButtonProps {
  text: string;
  onTap: Function;
  bgColor?: string;
  color?: string;
  children: Array<ReactNode> | ReactNode;
}
//const initialState = {};

const Button: React.FC<ButtonProps> = ({
  text,
  color,
  onTap,
  bgColor,
  children,
}) => {
  // const [state, setstate] = useState(initialState);

  //   useEffect(() => {
  //     //didMOunt//didUpdate
  //     return () => {
  //       //willUnmount
  //     };
  //   }, [state]);

  return (
    <TouchableOpacity
      onPress={(arg: any) => {
        onTap();
        console.log(arg);
      }}
      data-testID="Button">
      <View style={{...styles.Button, backgroundColor: bgColor}}>
        {children}
        <Text style={{...styles.text, color: color}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onTap: PropTypes.func.isRequired,
};
Button.defaultProps = {
  bgColor: 'blue',
  color: 'white',
};
export default Button;
