const API_URL = 'https://books-list-api.vercel.app/books';
const API_KEY = '#b0@6hX8YasCq6^unOaPw1tqR';

export const setSearchText = (text) => ({
  type: 'SET_SEARCH_TEXT',
  payload: text,
});

export const setBooks = (books) => ({
  type: 'SET_BOOKS',
  payload: books,
});

export const fetchBooks = (searchText) =>  {
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
    console.log('Data from API:', responseData);
    dispatch(setBooks(responseData.data));

    // Optionally, you can filter the books here based on the searchText before dispatching setBooks action
  } catch (error) {
    console.error('Error fetching books:', error);
  }
  }
};
