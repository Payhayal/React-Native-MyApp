import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/router/header';
import {screenStyle} from '../../styles/screenStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import FloatActionBtn from '../../components/ui/floatActionBtn';

const MyNotes = () => {
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />
        <FloatActionBtn />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
