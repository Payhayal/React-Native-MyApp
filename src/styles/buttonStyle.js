import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';

const ButtonStyles = StyleSheet.create({
  container: {
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
export {ButtonStyles};
