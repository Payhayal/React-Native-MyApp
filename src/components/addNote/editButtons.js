import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  TextBold,
  TextItalic,
  TextUnderline,
  TextalignCenter,
  TextalignJustifyleft,
  TextalignJustifyright,
} from 'iconsax-react-native';
import {AppColors} from '../../theme/colors';
import {EditBtnStyles} from '../../styles/editBtnStyles';

const EditButtons = ({onChangeStyle}) => {
  const [buttons, setButtons] = useState([
    {
      id: 1,
      value: 'bold',
      icon: <TextBold size="30" color={AppColors.BLACK} />,
      active: false,
    },
    {
      id: 2,
      value: 'italic',
      icon: <TextItalic size="30" color={AppColors.BLACK} />,
      active: false,
    },
    {
      id: 3,
      value: 'textUnderline',
      icon: <TextUnderline size="30" color={AppColors.BLACK} />,
      active: false,
    },
    {
      id: 4,
      value: 'textCenter',
      icon: <TextalignCenter size="30" color={AppColors.BLACK} />,
      active: false,
    },
    {
      id: 5,
      value: 'textLeft',
      icon: <TextalignJustifyleft size="30" color={AppColors.BLACK} />,
      active: false,
    },
    {
      id: 6,
      value: 'textRight',
      icon: <TextalignJustifyright size="30" color={AppColors.BLACK} />,
      active: false,
    },
  ]);

  const handlePress = item => {
    // Tıklanan düğmenin etkin durumunu tersine çevir
    const updatedButtons = buttons.map(button =>
      button.id === item.id ? {...button, active: !button.active} : button,
    );
    // Yenilenmiş düğme durumunu ayarla
    setButtons(updatedButtons);
    // onChangeStyle fonksiyonunu çağır ve değeri ve etkin durumu geçir
    onChangeStyle(item.value, !item.active);
  };

  return (
    <View style={EditBtnStyles.container}>
      {buttons.map((item, index) => (
        <TouchableOpacity
          onPress={() => handlePress(item)}
          style={[item.active ? EditBtnStyles.active : EditBtnStyles.button]} // Eğer etkinse "active" stilini uygula
          key={item.id}>
          {item.icon}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default EditButtons;
