import React, {useEffect} from 'react';
import {View, Text, TextInput, FlatList,StatusBar,SafeAreaView,StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setSearchText, fetchBooks} from '../../redux/actions/actions';
import MovieCard from '../components/MovieCard';
import MainHeader from '../components/Headers/MainHeader';

const Book = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  const searchText = useSelector(state => state.searchText);

  useEffect(() => {
    dispatch(fetchBooks(searchText));
  }, [searchText, dispatch]);

  const renderItem = ({item}) => (
    <View style={{flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
      <MovieCard item={item} imageLink={item.imageLink} />
    </View>
  );

  return (
    <SafeAreaView style={{flex:1}}>
      
      <MainHeader/>
      <TextInput
    
        placeholder="Search for s..."
        value={searchText}
        onChangeText={(text) => dispatch(setSearchText(text))}
        placeholderTextColor={'black'}
      />
     <FlatList
        data={books}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item =>
          item.id ? item.id.toString() : Math.random().toString()
        }
        
        ListEmptyComponent={
          <Text style={{color: 'black'}}>No results found.</Text>
        }
      />
      
    </SafeAreaView>
  );
};

export default Book;