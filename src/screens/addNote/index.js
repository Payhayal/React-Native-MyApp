import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import {screenStyle} from '../../styles/screenStyles';
import Button from '../../components/ui/button';
import EditButtons from '../../components/addNote/editButtons';

const AddNote = ({route}) => {
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View>
          <EditButtons />
        </View>
        <View style={styles.info}>
          <Text>add Noteee</Text>
        </View>
        <View>
          <Button title="Save Changes" />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  info: {
    flex: 1,
  },
});

export default AddNote;
