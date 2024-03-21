import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/colors';
import {screenHeight, screenWidth} from '../../utils/constants';
import {Trash} from 'iconsax-react-native';

const NoteCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.dot}></View>
      </View>
      <View style={styles.data}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={styles.trashView}>
        <Trash
          size="24"
          variant="Bold"
          color={AppColors.BLACK}
          style={AppColors.trash}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    margin: 15,
    backgroundColor: AppColors.WHITE,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: AppColors.BLACK,
  },
  description: {
    fontSize: 14,
    color: AppColors.SECONDARY,
    marginVertical: 7,
  },
  date: {
    fontSize: 14,
    color: AppColors.SECONDARY,
    marginVertical: 7,
  },
  dot: {
    width: screenWidth * 0.03,
    height: screenWidth * 0.03,
    backgroundColor: AppColors.GRAY,
    borderRadius: 100,
  },
  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  data: {flex: 8},
  trashView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trash: {
    justifyContent: 'flex-end',
  },
});
export default NoteCard;
