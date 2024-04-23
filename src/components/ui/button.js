import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ButtonStyles} from '../../styles/buttonStyle';

const Button = props => {
  const {title} = props;
  return (
    <TouchableOpacity {...props} style={ButtonStyles.container}>
      <Text style={ButtonStyles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
