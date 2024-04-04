import React, {useState} from 'react';
import {Alert} from 'react-native';
import MyContext from '.';

const Provider = ({children}) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Design Engineer',
      description: 'This is the first description!',
      date: new Date().toLocaleTimeString(),
      read: false,
    },
    {
      id: 2,
      title: 'Software Engineer',
      description: 'This is the second description!',
      date: new Date().toLocaleTimeString(),
      read: false,
    },
    {
      id: 3,
      title: 'Content Writer',
      description: 'This is the third description!',
      date: new Date().toLocaleTimeString(),
      read: false,
    },
    {
      id: 4,
      title: 'Data Engineer',
      description: 'This is the fourth description!',
      date: new Date().toLocaleTimeString(),
      read: false,
    },
  ]);
  const addNotes = item => {
    Alert.alert('Add', `Are you sure you want to add a new note?`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Add',
        onPress: () => {
          if (item) {
            setNotes([...notes, item]);
            Alert.alert('Your note has been successfully added!');
          }
        },
        style: 'destructive',
      },
    ]);
  };
  const deleteNote = id => {
    Alert.alert(
      'Delete',
      `Are you sure you want to delete the note?`,

      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            if (id) {
              const updateItems = notes.filter(item => item.id !== id);
              setNotes(updateItems);
              Alert.alert('Your note has been successfully deleted!');
            }
          },
          style: 'destructive',
        },
      ],
    );
  };
  const updateNote = (id, item) => {
    Alert.alert('Update', `Do you want to update the note?`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Update',
        onPress: () => {
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
          setNotes(updateItems);
          Alert.alert('Your note has been successfully updated!');
        },
        style: 'destructive',
      },
    ]);
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
