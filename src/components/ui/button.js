import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/colors';

const Button = props => {
  const {title} = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 10,
  },
  title: {
    color: AppColors.WHITE,
    fontSize: 20,
    fontWeight: 600,
  },
});

export default Button;
