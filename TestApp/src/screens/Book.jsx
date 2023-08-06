import React, {useEffect,useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setSearchText, fetchBooks} from '../../redux/actions/actions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MovieCard from '../components/MovieCard';
import MainHeader from '../components/Headers/MainHeader';
import { Colors } from '../utils/Color';
import { moderateScale } from 'react-native-size-matters';
import { Font } from '../utils/font';

const Book = ({navigation}) => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  const searchText = useSelector(state => state.searchText);
  const [load,setLoad]= useState(true)
  useEffect(() => {
    dispatch(fetchBooks(searchText));
  }, [searchText, dispatch]);

  setTimeout(() => {
    setLoad(false)
  }, 5000);

  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <MovieCard
        onPress={() => navigation.navigate('SingleBook',{item:item})}
        item={item}
        imageLink={item.imageLink}
      />
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:Colors.White,paddingHorizontal:moderateScale(10)}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <MainHeader />
      <View
        style={styles.searchBox}>
        <Ionicons
          name="search-sharp"
          color="black"
          size={20}
          style={{paddingHorizontal: 10}}
        />
        <TextInput
          placeholder="Search..."
          value={searchText}
          onChangeText={text => dispatch(setSearchText(text))}
          placeholderTextColor= {Colors.Black}
          style={{
            width: `80%`,
            color: Colors.Black,
          }}
        
          enterKeyHint='search'
        />
      </View>
      <FlatList
        data={books}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item =>
          item.id ? item.id.toString() : Math.random().toString()
        }
        ListEmptyComponent={
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:'50%'}}>
            <ActivityIndicator color="#114A5F" size={30} />
            <Text style={{color: 'black'}}>{load ? `Please Wait.` : `No Result Found`}</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Book;

const styles = StyleSheet.create({
searchBox:{
  
    backgroundColor: Colors.SearchBox,
    width: `95%`,
    alignSelf: 'center',
    paddingHorizontal: 10,
    borderRadius: 100,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  
}
})