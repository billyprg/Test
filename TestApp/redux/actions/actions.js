const API_URL = 'https://books-list-api.vercel.app/books';
const API_KEY = '#b0@6hX8YasCq6^unOaPw1tqR';
// const NEWS_API = 'pub_294496a2ef83ebb8f54e42d8fa1627235281d'
// const NEWS_URL = 'https://newsdata.io/api/1/news?apikey=pub_294496a2ef83ebb8f54e42d8fa1627235281d&q=pizza'


const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=5163784cd5a541ee84192a91ddfac5b1`


export const setSearchText = (text) => ({
  type: 'SET_SEARCH_TEXT',
  payload: text,
});

export const setBooks = (books) => ({
  type: 'SET_BOOKS',
  payload: books,
});

export const setNews = (news) => ({
  type: 'SET_NEWS',
  payload: news,
});



export const fetchBooks = (searchText) => {
  return async (dispatch) => {
    try {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      };

      const response = await fetch(API_URL, {
        method: 'GET',
        headers: headers,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();

      const filteredData = responseData.data.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );

      dispatch(setBooks(filteredData.slice(0, 15)));

    } catch (error) {
      console.error('Error fetching books baby:', error);
    }
  };
};


export const fetchNews =  (setError,setLoading) => {

  return async (dispatch) => {
    try {
    

      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();
      // const newData = responseData.slice(0, 15);
      // console.log('newData', responseData)
  
      dispatch(setNews(responseData.articles));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setError(error);
      setLoading(false);
    }
  }
 
};


