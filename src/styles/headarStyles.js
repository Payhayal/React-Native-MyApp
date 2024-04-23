import {StyleSheet} from 'react-native';
import {AppColors} from '../theme/colors';
import {screenHeight} from '../utils/constants';

const HeaderStyles = StyleSheet.create({
  container: {
    minHeight: screenHeight * 0.2,
    padding: 10,
  },
  mynotes: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  text: {
    fontSize: 35,
    color: AppColors.SECONDARY,
  },
  bottomHeader: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  bottomLeft: {
    padding: 5,
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  bottomRight: {
    padding: 5,
    flex: 1,
    margin: 5,
    gap: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export {HeaderStyles};
