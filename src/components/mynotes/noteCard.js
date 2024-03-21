import {View, Text} from 'react-native';
import React from 'react';
import {Trash} from 'iconsax-react-native';
import {NoteCardStyles} from '../../styles/noteCardStyles';
import {AppColors} from '../../theme/colors';

const NoteCard = ({item}) => {
  return (
    <View style={NoteCardStyles.container}>
      <View style={NoteCardStyles.bubbleContainer}>
        <View style={NoteCardStyles.bubble}></View>
      </View>
      <View style={NoteCardStyles.noteContainer}>
        <Text style={NoteCardStyles.title}>{item.title}</Text>
        <Text style={NoteCardStyles.description}>{item.description}</Text>
        <Text style={NoteCardStyles.date}>{item.date}</Text>
      </View>
      <View style={NoteCardStyles.trashView}>
        <Trash size="24" variant="Bold" color={AppColors.BLACK} />
      </View>
    </View>
  );
};

export default NoteCard;
