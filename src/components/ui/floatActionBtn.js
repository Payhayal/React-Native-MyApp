import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Add} from 'iconsax-react-native';
import {FloatActionBtnStyles} from '../../styles/floatActionBtnStyles';

const FloatActionBtn = props => {
  return (
    <TouchableOpacity {...props} style={FloatActionBtnStyles.container}>
      <Add size="50" style={FloatActionBtnStyles.addBtn} />
    </TouchableOpacity>
  );
};

export default FloatActionBtn;
