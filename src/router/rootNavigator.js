import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyNotes from '../screens/myNotes';
import AddNote from '../screens/addNote';
import NoteDetail from '../screens/noteDetail';
import {ADDNOTE, MYNOTES, NOTEDETAIL} from '../utils/routes';
import {AppColors} from '../theme/colors';
import HeaderRight from '../components/ui/headerRight';

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: AppColors.BLACK,
      }}
      initialRouteName={MYNOTES}>
      <Stack.Screen
        options={{headerShown: false}}
        name={MYNOTES}
        component={MyNotes}
      />
      <Stack.Screen
        initialParams={{type: 'type'}}
        options={({route}) => ({
          headerRight: props => <HeaderRight />,
          title: route.params.type === 'add' ? 'Add Note' : 'Update Note',
        })}
        name={ADDNOTE}
        component={AddNote}
      />

      <Stack.Screen name={NOTEDETAIL} component={NoteDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
