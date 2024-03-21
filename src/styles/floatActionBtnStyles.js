import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';
import {screenWidth} from '../utils/constants';

const FloatActionBtnStyles = StyleSheet.create({
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
  addBtn: {
    color: AppColors.WHITE,
  },
});

export {FloatActionBtnStyles};
