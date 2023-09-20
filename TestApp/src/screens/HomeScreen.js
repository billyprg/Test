import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import SearchBox from '../components/SearchBox';
import PostCard from '../components/Card/PostCard';
import {
  fetchPosts,
} from '../../redux/actions/actions'; 
import {useDispatch, useSelector} from 'react-redux';
import {Font} from '../utils/font';
import NoResultComponent from '../components/NoResultComponent';
import MainHeader from '../components/Headers/Header';
import {Colors} from '../utils/Color';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();
  const posts = useSelector(state => state.post);

  useEffect(() => {
    dispatch(fetchPosts(setLoading));
  }, []);

  const filteredPosts = posts.filter(
    item =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.body.toLowerCase().includes(searchText.toLowerCase()),
  );

  const renderItem = ({item}) => (
    <View>
      <PostCard data={item} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.main} barStyle="dark-content" />
      <MainHeader />
      <View style={styles.content}>
        <SearchBox
          value={searchText}
          onChangeText={text => {
            setSearchText(text);
          }}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            contentContainerStyle={{paddingBottom: verticalScale(35)}}
            data={filteredPosts}
            renderItem={renderItem}
            keyExtractor={item =>
              item.id ? item.id.toString() : Math.random().toString()
            }
            ListEmptyComponent={<NoResultComponent />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.main,
    flex: 1,
  },
  content: {
    paddingHorizontal: moderateScale(10),
    flex:1
  },
  error: {
    fontFamily: Font.PoppinsLight,
    fontSize: scale(16),
    textAlign: 'center',
  },
});
