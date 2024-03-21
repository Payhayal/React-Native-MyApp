import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {screenHeight, screenWidth} from '../../utils/constants';
import {AppColors} from '../../theme/colors';
import {Add} from 'iconsax-react-native';

const FloatActionBtn = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Add size="50" color={AppColors.WHITE} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: AppColors.PRIMARY,
    borderRadius: screenWidth * 0.5,
    width: screenWidth * 0.2,
    height: screenWidth * 0.2,
  },
});

export default FloatActionBtn;
