import React from 'react';
import {StyleSheet, View, SafeAreaView, TextInput} from 'react-native';
import {screenStyle} from '../../styles/screenStyles';
import Button from '../../components/ui/button';
import EditButtons from '../../components/addNote/editButtons';
import {AppColors} from '../../theme/colors';

const AddNote = ({route}) => {
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View>
          <EditButtons />
        </View>
        <View style={styles.info}>
          <TextInput
            placeholder="Please,write your note here..."
            // value=""
            style={styles.input}
          />
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
  input: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    borderWidth: 1,
    padding: 5,
    margin: 8,
    borderRadius: 5,
    borderColor: AppColors.GRAY,
  },
});

export default AddNote;
