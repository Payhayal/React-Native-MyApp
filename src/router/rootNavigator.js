import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyNotes from '../screens/myNotes';
import AddNote from '../screens/addNote';
import NoteDetail from '../screens/noteDetail';
import {ADDNOTE, MYNOTES, NOTEDETAIL} from '../utils/routes';

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={MYNOTES}>
      <Stack.Screen name={MYNOTES} component={MyNotes} />
      <Stack.Screen name={ADDNOTE} component={AddNote} />
      <Stack.Screen name={NOTEDETAIL} component={NoteDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
