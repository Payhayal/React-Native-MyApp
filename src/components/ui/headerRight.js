import React from 'react';
import {View, StyleSheet} from 'react-native';
import {More, Paperclip, Share} from 'iconsax-react-native';
import {AppColors} from '../../theme/colors';

const HeaderRight = () => {
  return (
    <View style={styles.container}>
      <Paperclip size="24" color={AppColors.BLACK} />
      <Share size="24" color={AppColors.BLACK} />
      <More size="24" color={AppColors.BLACK} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15,
  },
});

export default HeaderRight;
