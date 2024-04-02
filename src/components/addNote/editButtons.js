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
const EditButtons = ({onChangeStyle}) => {
  const Buttons = [
    {
      id: 1,
      value: 'bold',
      icon: <TextBold size="30" color={AppColors.BLACK} />,
    },
    {
      id: 2,
      value: 'italic',
      icon: <TextItalic size="30" color={AppColors.BLACK} />,
    },
    {
      id: 3,
      value: 'textUnderline',
      icon: <TextUnderline size="30" color={AppColors.BLACK} />,
    },
    {
      id: 4,
      value: 'textCenter',
      icon: <TextalignCenter size="30" color={AppColors.BLACK} />,
    },
    {
      id: 5,
      value: 'textLeft',
      icon: <TextalignJustifyleft size="30" color={AppColors.BLACK} />,
    },
    {
      id: 6,
      value: 'textRight',
      icon: <TextalignJustifyright size="30" color={AppColors.BLACK} />,
    },
  ];

  return (
    <View style={styles.container}>
      {Buttons.map((item, index) => (
        <TouchableOpacity
          onPress={() => onChangeStyle(item.value)}
          key={item.id}>
          {item.icon}
        </TouchableOpacity>
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
