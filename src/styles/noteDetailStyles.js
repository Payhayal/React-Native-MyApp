import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';

const NoteDetailStyles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.WHITE,
    flex: 1,
    padding: 5,
  },
  info: {
    flex: 1,
  },
  inputTitle: {
    backgroundColor: AppColors.SCREENBACKGROUNDCOLOR,
    borderWidth: 1,
    padding: 2,
    margin: 30,
    borderRadius: 5,
    borderColor: AppColors.GRAY,
    fontSize: 20,
    fontWeight: 500,
    color: AppColors.BLACK,
    height: 80,
  },
  inputDescription: {
    backgroundColor: AppColors.SCREENBACKGROUNDCOLOR,
    borderWidth: 1,
    padding: 2,
    margin: 30,
    borderRadius: 5,
    borderColor: AppColors.GRAY,
    fontSize: 20,
    fontWeight: 500,
    color: AppColors.BLACK,
    height: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: AppColors.RED,
    marginTop: 10,
    marginLeft: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  textCenter: {
    textAlign: 'center',
  },
  default: {},
});

export {NoteDetailStyles};
