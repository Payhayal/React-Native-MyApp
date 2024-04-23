import React, {useContext, useState} from 'react';
import {View, SafeAreaView, TextInput, Text} from 'react-native';
import {screenStyle} from '../../styles/screenStyles';
import Button from '../../components/ui/button';
import {getRandomNumber} from '../../utils/functions';
import MyContext from '../../context';
import {useNavigation} from '@react-navigation/native';
import {AddNoteStyles} from '../../styles/addNoteStyles';

const AddNote = ({route}) => {
  const navigation = useNavigation();
  const {addNotes, updateNote} = useContext(MyContext);
  const {note, type} = route?.params;
  const [title, setTitle] = useState(note?.title);
  const [description, setDescription] = useState(note?.description);
  const [titleRequired, setTitleRequired] = useState(false);
  const [descriptionRequired, setDescriptionRequired] = useState(false);

  const saveNote = () => {
    if (title && description) {
      setTitleRequired(false);
      setDescriptionRequired(false);
      const form = {
        id: getRandomNumber(1, 100),
        title: title,
        description: description,
        date: new Date().toLocaleTimeString(),
        read: false,
      };
      addNotes(form);
      navigation.goBack();
    }
    if (!title && description) {
      setTitleRequired(true);
      setDescriptionRequired(false);
    }
    if (title && !description) {
      setTitleRequired(false);
      setDescriptionRequired(true);
    }
    if (!title && !description) {
      setTitleRequired(true);
      setDescriptionRequired(true);
    }
  };
  const onChangeNote = () => {
    if (title && description) {
      setTitleRequired(false);
      setDescriptionRequired(false);
      const form = {
        id: note.id,
        title: title,
        description: description,
        date: new Date().toLocaleTimeString(),
      };
      updateNote(note.id, form);
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View style={AddNoteStyles.info}>
          <Text style={AddNoteStyles.text}>Title :</Text>
          <TextInput
            placeholder="Please, write your title here..."
            style={AddNoteStyles.title}
            value={title}
            onChangeText={text => setTitle(text)}
          />
          {titleRequired && (
            <Text style={AddNoteStyles.validation}>
              Please fill in the title field!
            </Text>
          )}
          <Text style={AddNoteStyles.text}>Note :</Text>
          <TextInput
            placeholder="Write your note here..."
            style={AddNoteStyles.input}
            value={description}
            onChangeText={text => setDescription(text)}
          />
          {descriptionRequired && (
            <Text style={AddNoteStyles.validation}>
              Please fill in the note field!
            </Text>
          )}
        </View>
        <View>
          <Button
            onPress={type === 'update' ? onChangeNote : saveNote}
            title={type === 'update' ? 'Update Changes' : 'Save'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNote;
