import { useEffect, useCallback, useState } from 'react';
import axios from 'axios';

function App() {

  const [posts, setPosts] = useState([]);

  const fetchPosts = useCallback(async () => {
    const { data } = await axios.get('http://mood-night.com/api/posts');
    setPosts(data);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default App;
