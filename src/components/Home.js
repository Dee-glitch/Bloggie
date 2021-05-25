import useFetch from '../hooks/useFetch';
import BlogList from './BlogList';

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');
  const title = 'Welcome to my blog!';
 
  return (
    <div className="home">
      <div className="content">
        <h1>{title}</h1>
      </div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
    </div>
  );
}
 
export default Home;