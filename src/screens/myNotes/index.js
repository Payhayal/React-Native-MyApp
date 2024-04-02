import {View, Text, ScrollView, FlatList, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/router/header';
import {screenStyle} from '../../styles/screenStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import FloatActionBtn from '../../components/ui/floatActionBtn';
import NoteCard from '../../components/mynotes/noteCard';
import {ADDNOTE} from '../../utils/routes';

const MyNotes = ({navigation}) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Design Engineer',
      description: 'This is the first description!',
      date: '12:25 PM',
    },
    {
      id: 2,
      title: 'Software Engineer',
      description: 'This is the second description!',
      date: '12:25 PM',
    },
    {
      id: 3,
      title: 'Content Writer',
      description: 'This is the third description!',
      date: '12:25 PM',
    },
    {
      id: 4,
      title: 'Data Engineer',
      description: 'This is the fourth description!',
      date: '12:25 PM',
    },
  ]);

  let note2 = {
    id: 5,
    title: 'Datsddf Engineer',
    description: 'This is the fifth description!',
    date: '15:25 PM',
  };
  const addNote = item => {
    if (item) {
      setNotes([...notes, item]);
    }
  };
  const deleteNote = id => {
    if (id) {
      const updateItems = notes.filter(item => item.id !== id);
      setNotes(updateItems);
    } else {
      Alert.alert('There is no such note!');
    }
  };
  const updateNote = (id, item) => {
    const updateItems = notes.map(note =>
      note.id === id ? {...note, title: item?.title} : note,
    );
    setNotes(updateItems);
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setNotes([...notes, note2]);
  //   }, 2000);
  // }, []);

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />
        <FlatList
          data={notes}
          renderItem={({item}) => (
            <NoteCard
              item={item}
              navigation={navigation}
              deleteItem={item => deleteNote(item.id)}
              updateItem={item => updateNote(item.id)}
            />
          )}
          keyExtractor={item => item.id}
        />
        <FloatActionBtn onPress={() => navigation.navigate(ADDNOTE)} />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
