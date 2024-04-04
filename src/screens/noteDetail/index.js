import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import {AppColors} from '../../theme/colors';
import Button from '../../components/ui/button';
import EditButtons from '../../components/addNote/editButtons';
import MyContext from '../../context';
import {useNavigation} from '@react-navigation/native';
import {getRandomNumber} from '../../utils/functions';

const NoteDetail = ({route}) => {
  const navigation = useNavigation();
  const {note} = route?.params;
  const [title, setTitle] = useState(note?.title);
  const [description, setDescription] = useState(note?.description);
  const [selectedStyle, setSelectedStyle] = useState(styles.default);
  const {updateNote} = useContext(MyContext);

  const changeText = style => {
    switch (style) {
      case 'bold':
        setSelectedStyle(styles.bold);
        break;
      case 'italic':
        setSelectedStyle(styles.italic);
        break;
      case 'textUnderline':
        setSelectedStyle(styles.textUnderline);
        break;
      case 'textLeft':
        setSelectedStyle(styles.textLeft);
        break;
      case 'textRight':
        setSelectedStyle(styles.textRight);
        break;
      case 'textCenter':
        setSelectedStyle(styles.textCenter);
        break;

      default:
        setSelectedStyle(styles.default);
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
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View>
          <EditButtons onChangeStyle={value => changeText(value)} />
        </View>
        <View style={styles.info}>
          <Text style={styles.text}>Title :</Text>
          <TextInput
            placeholder="Title"
            style={[styles.inputTitle, selectedStyle]}
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <Text style={styles.text}>Description :</Text>
          <TextInput
            placeholder="Description"
            style={[styles.inputDescription, selectedStyle]}
            value={description}
            onChangeText={text => setDescription(text)}
          />
          {/* <Text style={styles.text}>Date :</Text>
          <TextInput
            placeholder="Date"
            style={[styles.input, selectedStyle]}
            value={note?.date}
          /> */}
        </View>
        <View>
          <Button onPress={saveChanges} title="Save Changes" />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.WHITE,
    flex: 1,
    padding: 5,
  },
  info: {
    flex: 1,
  },
  inputTitle: {
    backgroundColor: AppColors.SCREENBACKGROUNDCOLOR,
    borderWidth: 1,
    padding: 2,
    margin: 30,
    borderRadius: 5,
    borderColor: AppColors.GRAY,
    fontSize: 20,
    fontWeight: 500,
    color: AppColors.BLACK,
    height: 80,
  },
  inputDescription: {
    backgroundColor: AppColors.SCREENBACKGROUNDCOLOR,
    borderWidth: 1,
    padding: 2,
    margin: 30,
    borderRadius: 5,
    borderColor: AppColors.GRAY,
    fontSize: 20,
    fontWeight: 500,
    color: AppColors.BLACK,
    height: 100,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: AppColors.RED,
    marginTop: 10,
    marginLeft: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  textCenter: {
    textAlign: 'center',
  },
  default: {},
});

export default NoteDetail;
