import React, {useState} from 'react';
import {Alert} from 'react-native';
import MyContext from '.';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Provider = ({children}) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Note 1',
      description: 'This is the first note!',
      date: new Date().toLocaleTimeString(),
      read: false,
    },
    {
      id: 2,
      title: 'Note 2',
      description: 'This is the second note!',
      date: new Date().toLocaleTimeString(),
      read: false,
    },
    {
      id: 3,
      title: 'Note 3',
      description: 'This is the third note!',
      date: new Date().toLocaleTimeString(),
      read: false,
    },
    {
      id: 4,
      title: 'Note 4',
      description: 'This is the fourth note!',
      date: new Date().toLocaleTimeString(),
      read: false,
    },
  ]);

  const addNotes = item => {
    Alert.alert(
      'Add',
      `Are you sure you want to add a new note named "${item?.title}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Add',
          onPress: async () => {
            if (item) {
              setNotes([...notes, item]);
              await AsyncStorage.getItem('notes').then(() =>
                setNotes([...notes, item]),
              );
              Alert.alert('Your note has been successfully added!');
            }
          },

          style: 'destructive',
        },
      ],
    );
  };
  const deleteNote = (id, item) => {
    Alert.alert(
      'Delete',
      `Are you sure you want to delete the note "${item?.title}" ?`,

      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            if (id) {
              const deleteItems = notes.filter(note => note.id !== id);
              await AsyncStorage.removeItem('notes').then(() =>
                setNotes(deleteItems),
              );
              Alert.alert('Your note has been successfully deleted!');
            }
          },

          style: 'destructive',
        },
      ],
    );
  };
  const updateNote = (id, item) => {
    Alert.alert(
      'Update',
      `Do you want to update the note as "${item?.title}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Update',
          onPress: async () => {
            const updateItems = notes.map(note =>
              note.id === id
                ? {
                    ...note,
                    title: item?.title,
                    description: item.description,
                    read: true,
                    date: new Date().toLocaleTimeString(),
                  }
                : note,
            );
            await AsyncStorage.setItem(
              'notes',
              JSON.stringify(updateItems),
            ).then(() => setNotes(updateItems));
            Alert.alert('Your note has been successfully updated!');
          },
          style: 'destructive',
        },
      ],
    );
  };

  return (
    <MyContext.Provider
      value={{
        notes,
        setNotes,
        addNotes,
        updateNote,
        deleteNote,
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
