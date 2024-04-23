import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Edit, Trash} from 'iconsax-react-native';
import {NoteCardStyles} from '../../styles/noteCardStyles';
import {AppColors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {ADDNOTE, NOTEDETAIL} from '../../utils/routes';
import MyContext from '../../context';

const NoteCard = ({item, deleteItem, updateItem}) => {
  const {deleteNote} = useContext(MyContext);
  const navigation = useNavigation();

  const [isRead, setIsRead] = useState(item.read);

  // Stil belirleme fonksiyonu
  const getBubbleStyle = () => {
    return isRead ? NoteCardStyles.bubble : NoteCardStyles.bubbleRead;
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(NOTEDETAIL, {note: item});
        setIsRead(!isRead);
      }}
      style={NoteCardStyles.container}>
      <View style={NoteCardStyles.bubbleContainer}>
        <View style={getBubbleStyle()} />
      </View>
      <View style={NoteCardStyles.noteContainer}>
        <Text style={NoteCardStyles.title}>{item.title}</Text>
        <Text style={NoteCardStyles.description}>{item.description}</Text>
        <Text style={NoteCardStyles.date}>{item.date}</Text>
      </View>
      <TouchableOpacity
        onPress={() => deleteNote(item.id, item)}
        style={NoteCardStyles.trashView}>
        <Trash size="24" variant="Bold" color={AppColors.RED} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ADDNOTE, {note: item, type: 'update'})
        }
        style={NoteCardStyles.trashView}>
        <Edit size="24" variant="Bold" color={AppColors.PRIMARY} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default NoteCard;
