import {View, Text} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/colors';
import {MYNOTES} from '../../utils/routes';
import {HambergerMenu, More, SearchNormal1} from 'iconsax-react-native';
import {HeaderStyles} from '../../styles/headarStyles';

const Header = () => {
  return (
    <View style={HeaderStyles.container}>
      <View style={HeaderStyles.mynotes}>
        <Text style={HeaderStyles.text}>{MYNOTES}</Text>
      </View>
      <View style={HeaderStyles.bottomHeader}>
        <View style={HeaderStyles.bottomLeft}>
          <HambergerMenu size="28" color={AppColors.BLACK} />
        </View>
        <View style={HeaderStyles.bottomRight}>
          <SearchNormal1 size="28" color={AppColors.BLACK} />
          <More size="28" color={AppColors.BLACK} />
        </View>
      </View>
    </View>
  );
};

export default Header;
