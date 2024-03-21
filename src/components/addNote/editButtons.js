import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  TextBold,
  TextItalic,
  TextUnderline,
  TextalignCenter,
  TextalignJustifyleft,
  TextalignJustifyright,
} from 'iconsax-react-native';
import {AppColors} from '../../theme/colors';
const EditButtons = () => {
  const Buttons = [
    {
      id: 1,
      name: 'bold',
      icon: <TextBold size="30" color={AppColors.BLACK} />,
    },
    {
      id: 2,
      name: 'bold',
      icon: <TextItalic size="30" color={AppColors.BLACK} />,
    },
    {
      id: 3,
      name: 'bold',
      icon: <TextUnderline size="30" color={AppColors.BLACK} />,
    },
    {
      id: 4,
      name: 'bold',
      icon: <TextalignCenter size="30" color={AppColors.BLACK} />,
    },
    {
      id: 5,
      name: 'bold',
      icon: <TextalignJustifyleft size="30" color={AppColors.BLACK} />,
    },
    {
      id: 6,
      name: 'bold',
      icon: <TextalignJustifyright size="30" color={AppColors.BLACK} />,
    },
  ];

  return (
    <View style={styles.container}>
      {Buttons.map((item, index) => (
        <TouchableOpacity key={item.id}>{item.icon}</TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.GRAY,
    flexDirection: 'row',
    padding: 5,
    paddingVertical: 10,
    justifyContent: 'space-around',
    borderRadius: 7,
  },
});

export default EditButtons;
