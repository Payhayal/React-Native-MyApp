import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import Button from '../../components/ui/button';
import EditButtons from '../../components/addNote/editButtons';
import MyContext from '../../context';
import {useNavigation} from '@react-navigation/native';
import {getRandomNumber} from '../../utils/functions';
import {NoteDetailStyles} from '../../styles/noteDetailStyles';

const NoteDetail = ({route}) => {
  const navigation = useNavigation();
  const {note} = route?.params;
  const [title, setTitle] = useState(note?.title);
  const [description, setDescription] = useState(note?.description);
  const [selectedStyle, setSelectedStyle] = useState(NoteDetailStyles.default);
  const {updateNote} = useContext(MyContext);

  const changeText = style => {
    switch (style) {
      case 'bold':
        setSelectedStyle(NoteDetailStyles.bold);
        break;
      case 'italic':
        setSelectedStyle(NoteDetailStyles.italic);
        break;
      case 'textUnderline':
        setSelectedStyle(NoteDetailStyles.textUnderline);
        break;
      case 'textLeft':
        setSelectedStyle(NoteDetailStyles.textLeft);
        break;
      case 'textRight':
        setSelectedStyle(NoteDetailStyles.textRight);
        break;
      case 'textCenter':
        setSelectedStyle(NoteDetailStyles.textCenter);
        break;

      default:
        setSelectedStyle(NoteDetailStyles.default);
        break;
    }
  };
  useEffect(() => {}, [updateNote]);

  const saveChanges = () => {
    const form = {
      id: getRandomNumber(1, 100),
      title: title,
      description: description,
      date: new Date().toLocaleTimeString(),
      read: false,
    };
    updateNote(note.id, form);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={NoteDetailStyles.container}>
      <View style={NoteDetailStyles.container}>
        <View>
          <EditButtons onChangeStyle={value => changeText(value)} />
        </View>
        <View style={NoteDetailStyles.info}>
          <Text style={NoteDetailStyles.text}>Title :</Text>
          <TextInput
            placeholder="Title"
            style={[NoteDetailStyles.inputTitle, selectedStyle]}
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <Text style={NoteDetailStyles.text}>Description :</Text>
          <TextInput
            placeholder="Description"
            style={[NoteDetailStyles.inputDescription, selectedStyle]}
            value={description}
            onChangeText={text => setDescription(text)}
          />
        </View>
        <View>
          <Button onPress={saveChanges} title="Save Changes" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NoteDetail;
