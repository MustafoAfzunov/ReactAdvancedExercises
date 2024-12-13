import './App.css';
import UserList from './components/UserList';
import PostList from './components/PostList';
import ErrorExample from './components/ErrorExample';

function App() {
  return (
    <div className="App">
      <h1>Data Fetching Examples</h1>
      
      <section>
        <h2>1. Basic User List</h2>
        <UserList />
      </section>

      <section>
        <h2>2. Posts with Loading State</h2>
        <PostList />
      </section>

      <section>
        <h2>3. Error Handling Example</h2>
        <ErrorExample />
      </section>
    </div>
  );
}

export default App; 