import React, {useEffect, useState,useContext} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import NewsCard from '../components/Card/NewsCard';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNews} from '../../redux/actions/actions';
import { AuthContext } from '../context/AuthContext';
import { scale } from 'react-native-size-matters';

const ApiPractice = () => {

  const {logout} = useContext(AuthContext);

  const numbers = [1, 5, 7];

  const API_KEY = '5163784cd5a541ee84192a91ddfac5b1';

  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=5163784cd5a541ee84192a91ddfac5b1`;

  const dispatch = useDispatch();

  const news = useSelector(state => state.news);

  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // console.log('data dekhlo', data)

  // const fetchNews = async () => {
  //   try {

  //     const response = await fetch(url);

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const responseData = await response.json();
  //     // const newData = responseData.slice(0, 15);
  //     // console.log('newData', responseData)

  //     setData(responseData.articles);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error('Error fetching news:', error);
  //     setError(error);
  //     setLoading(false);
  //   }
  // };
  const result = numbers.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      // If the current element is even, add it to the accumulator
      return accumulator + currentValue;
    } else {
      // If the current element is odd, subtract it from the accumulator
      return accumulator - currentValue;
    }
  }, 0);
  useEffect(() => {
    dispatch(fetchNews(setError, setLoading));
  }, []);

  const renderItem = ({item}) => (
    <View>
      <NewsCard data={item} />
    </View>
  );

  return (
    <View>
      <View>
        <Text style={{color: 'black',fontSize:scale(24),alignSelf:'center'}} onPress={logout()}> click me</Text>
      </View>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {error && <Text>Error: {error.message}</Text>}

      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={item =>
          item.id ? item.id.toString() : Math.random().toString()
        }
        // ListEmptyComponent={
        //   <View
        //     style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:'50%'}}>
        //     <ActivityIndicator color="#114A5F" size={30} />
        //     <Text style={{color: 'black'}}>{loading ? `Please Wait.` : `No Result Found`}</Text>
        //   </View>
        // }
      />
    </View>
  );
};

export default ApiPractice;
