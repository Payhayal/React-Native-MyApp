import React, {useContext, useState} from 'react';
import {StyleSheet, View, SafeAreaView, TextInput, Text} from 'react-native';
import {screenStyle} from '../../styles/screenStyles';
import Button from '../../components/ui/button';
import {AppColors} from '../../theme/colors';
import {getRandomNumber} from '../../utils/functions';
import MyContext from '../../context';
import {useNavigation} from '@react-navigation/native';

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
        <View style={styles.info}>
          <Text style={styles.text}>Title :</Text>
          <TextInput
            placeholder="Please, write your title here..."
            style={styles.title}
            value={title}
            onChangeText={text => setTitle(text)}
          />
          {titleRequired && (
            <Text style={styles.validation}>
              Please fill in the title field!
            </Text>
          )}
          <Text style={styles.text}>Note :</Text>
          <TextInput
            placeholder="Write your note here..."
            style={styles.input}
            value={description}
            onChangeText={text => setDescription(text)}
          />
          {descriptionRequired && (
            <Text style={styles.validation}>
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
const styles = StyleSheet.create({
  info: {
    flex: 1,
    padding: 10,
  },
  title: {
    backgroundColor: AppColors.WHITE,
    borderWidth: 1,
    padding: 5,
    margin: 8,
    borderRadius: 10,
    borderColor: AppColors.GRAY,
    height: 50,
  },
  input: {
    backgroundColor: AppColors.WHITE,
    borderWidth: 1,
    padding: 5,
    margin: 8,
    borderRadius: 10,
    borderColor: AppColors.GRAY,
    height: 100,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: AppColors.RED,
    marginVertical: 15,
  },
  validation: {
    color: AppColors.RED,
    fontWeight: 'bold',
    marginVertical: 15,
  },
});

export default AddNote;
