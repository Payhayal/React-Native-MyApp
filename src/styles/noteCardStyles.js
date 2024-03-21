import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';
import {screenWidth} from '../utils/constants';

const NoteCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    margin: 10,
    backgroundColor: AppColors.WHITE,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  bubbleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bubble: {
    width: screenWidth * 0.03,
    height: screenWidth * 0.03,
    backgroundColor: AppColors.GRAY,
    marginTop: 5,
    borderRadius: 100,
  },
  noteContainer: {
    flex: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: AppColors.BLACK,
  },
  description: {
    fontSize: 14,
    color: AppColors.SECONDARY,
    marginVertical: 7,
  },
  date: {
    fontSize: 14,
    color: AppColors.SECONDARY,
  },

  trashView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {NoteCardStyles};
