import React, {useEffect} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setSearchText, fetchBooks} from '../../redux/actions/actions';
import MovieCard from '../components/MovieCard';

const Book = () => {

  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  const searchText = useSelector(state => state.searchText);

  useEffect(() => {
    dispatch(fetchBooks(searchText));
  }, [searchText, dispatch]);

  const renderItem = ({item}) => (
  
    // <View style={{padding: 10}}>
    //   <Text style={{color: 'black'}}>Title: {item.title}</Text>
    //   <Text style={{color: 'black'}}>Author: {item.author}</Text>
    //   {/* Add any other properties you want to display */}
    // </View>

<View style={{flexDirection:'row'}}>

  <MovieCard item={item} imageLink={item.imageLink} />
</View>

  );

  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
        placeholder="Search for books..."
        value={searchText}
        onChangeText={text => dispatch(setSearchText(text))}
        placeholderTextColor={'black'}
      />
      <FlatList 
      
        data={books}
        renderItem={renderItem}
        keyExtractor={item =>
          item.id ? item.id.toString() : Math.random().toString()
        }
        ListEmptyComponent={
          <Text style={{color: 'black'}}>No results found.</Text>
        }
      />
    </View>
  );
};

export default Book;
