import React from 'react';
import {View} from 'react-native';
import {More, Paperclip, Share} from 'iconsax-react-native';
import {AppColors} from '../../theme/colors';
import {HeaderRightStyles} from '../../styles/headerRightStyles';

const HeaderRight = () => {
  return (
    <View style={HeaderRightStyles.container}>
      <Paperclip size="24" color={AppColors.BLACK} />
      <Share size="24" color={AppColors.BLACK} />
      <More size="24" color={AppColors.BLACK} />
    </View>
  );
};

export default HeaderRight;
