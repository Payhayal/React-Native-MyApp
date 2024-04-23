import {View, FlatList} from 'react-native';
import React, {useContext} from 'react';
import Header from '../../components/router/header';
import {screenStyle} from '../../styles/screenStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import FloatActionBtn from '../../components/ui/floatActionBtn';
import NoteCard from '../../components/mynotes/noteCard';
import {ADDNOTE} from '../../utils/routes';
import MyContext from '../../context';

const MyNotes = ({navigation}) => {
  const {notes, deleteNote, updateNote} = useContext(MyContext);

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
        <FloatActionBtn
          onPress={() => navigation.navigate(ADDNOTE, {type: 'add'})}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
