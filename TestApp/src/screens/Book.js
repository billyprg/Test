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
    <SafeAreaView style={{flex: 1, backgroundColor: '#FAFAFA'}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <MainHeader />
      <View
        style={{
          backgroundColor: '#EFEFEF',
          width: `95%`,
          alignSelf: 'center',
          paddingHorizontal: 10,
          borderRadius: 100,
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
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
          placeholderTextColor='#000'
          style={{
            width: `80%`,
            color: '#000',
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
