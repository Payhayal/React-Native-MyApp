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
    if (item) {
      setNotes([...notes, item]);
      Alert.alert('You saved the note successfully!');
    }
  };
  const deleteNote = id => {
    if (id) {
      const updateItems = notes.filter(item => item.id !== id);
      setNotes(updateItems);
      Alert.alert('Your note was deleted successfully!');
    } else {
      Alert.alert('There is no such note!');
    }
  };
  const updateNote = (id, item) => {
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
    Alert.alert('Your note was updated successfully!');
  };
  return (
    <MyContext.Provider
      value={{notes, setNotes, addNotes, updateNote, deleteNote}}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
