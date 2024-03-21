import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import Header from '../../components/router/header';
import {screenStyle} from '../../styles/screenStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import FloatActionBtn from '../../components/ui/floatActionBtn';
import {mockData} from '../../utils/mockData';
import NoteCard from '../../components/mynotes/noteCard';

const MyNotes = () => {
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />
        <FlatList
          data={mockData}
          renderItem={({item}) => <NoteCard item={item} />}
          keyExtractor={item => item.id}
        />
        <FloatActionBtn />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
