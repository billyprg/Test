const url = `https://jsonplaceholder.typicode.com/posts`;

export const setPosts = post => ({
  type: 'SET_POSTS',
  payload: post,
});

export const fetchPosts = (setLoading) => {
  return async dispatch => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();

      dispatch(setPosts(responseData));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };
};
