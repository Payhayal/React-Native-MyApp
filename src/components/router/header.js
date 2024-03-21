import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {screenHeight} from '../../utils/constants';
import {AppColors} from '../../theme/colors';
import {MYNOTES} from '../../utils/routes';
import {HambergerMenu, More, SearchNormal1} from 'iconsax-react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mynotes}>
        <Text style={styles.text}>{MYNOTES}</Text>
      </View>
      <View style={styles.bottomHeader}>
        <View style={styles.bottomLeft}>
          <HambergerMenu size="28" color={AppColors.BLACK} />
        </View>
        <View style={styles.bottomRight}>
          <SearchNormal1 size="28" color={AppColors.BLACK} />
          <More size="28" color={AppColors.BLACK} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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

export default Header;
