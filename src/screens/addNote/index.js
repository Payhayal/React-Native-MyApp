import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, TextInput, Text} from 'react-native';
import {screenStyle} from '../../styles/screenStyles';
import Button from '../../components/ui/button';
import {AppColors} from '../../theme/colors';
import {getRandomNumber} from '../../utils/functions';

const AddNote = ({route}) => {
  const {note, type} = route?.params;
  const [title, setTitle] = useState(note?.title);
  const [addNote, setAddNote] = useState(note?.description);
  const [titleRequired, setTitleRequired] = useState(false);
  const [addNoteRequired, setAddNoteRequired] = useState(false);

  const saveNote = () => {
    if (!title && addNote) {
      setTitleRequired(true);
      setAddNoteRequired(false);
    }
    if (title && !addNote) {
      setTitleRequired(false);
      setAddNoteRequired(true);
    }
    if (!title && !addNote) {
      setTitleRequired(true);
      setAddNoteRequired(true);
    }
    if (title && addNote) {
      setTitleRequired(false);
      setAddNoteRequired(false);
      const form = {
        id: getRandomNumber(1, 100),
        title: title,
        description: addNote,
        date: new Date().toLocaleTimeString(),
      };
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
            value={addNote}
            onChangeText={text => setAddNote(text)}
          />
          {addNoteRequired && (
            <Text style={styles.validation}>
              Please fill in the note field!
            </Text>
          )}
        </View>
        <View>
          <Button
            onPress={saveNote}
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
