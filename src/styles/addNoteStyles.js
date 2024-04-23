import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';

const AddNoteStyles = StyleSheet.create({
  info: {
    flex: 1,
    padding: 10,
  },
  title: {
    backgroundColor: AppColors.WHITE,
    borderWidth: 1,
    padding: 5,
    margin: 8,
    borderRadius: 10,
    borderColor: AppColors.GRAY,
    height: 50,
  },
  input: {
    backgroundColor: AppColors.WHITE,
    borderWidth: 1,
    padding: 5,
    margin: 8,
    borderRadius: 10,
    borderColor: AppColors.GRAY,
    height: 100,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: AppColors.RED,
    marginVertical: 15,
  },
  validation: {
    color: AppColors.RED,
    fontWeight: 'bold',
    marginVertical: 15,
  },
});

export {AddNoteStyles};
