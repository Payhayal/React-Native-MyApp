import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';

const EditBtnStyles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.GRAY,
    flexDirection: 'row',
    padding: 5,
    paddingVertical: 10,
    justifyContent: 'space-around',
    borderRadius: 7,
  },
  button: {
    backgroundColor: AppColors.GRAY,
  },
  active: {
    backgroundColor: 'white',
    borderRadius: 8,
  },
});
export {EditBtnStyles};
