import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {Colors} from '../utils/Color';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Font } from '../utils/font';

const SearchBox = (props) => {
  return (
    <View style={styles.searchBox}>
      <Ionicons
        name="search-sharp"
        color="black"
        size={scale(20)}
        style={{paddingHorizontal: 10}}
      />
      <TextInput
        placeholder="Search..."
        value={props.value}
        onChangeText={props.onChangeText}
        placeholderTextColor={Colors.Black}
        style={styles.input}
        enterKeyHint="search"
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: Colors.White,
    paddingHorizontal: moderateScale(10),
    borderRadius: scale(100),
    marginVertical: verticalScale(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: Colors.Black,
    flex: 1,
    fontFamily: Font.PoppinsLight
  },
});
