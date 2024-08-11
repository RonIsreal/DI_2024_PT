import logo from './logo.svg';
import './App.css';
import Post from './Post';

let posts = [
  {
    title: "AAA",
    sub: "aaa aaa",
    body: "lorem ipsum"
  },
  {
    title: "AAA",
    sub: "aaa aaa",
    body: "lorem ipsum"
  },
  {
    title: "AAA",
    sub: "aaa aaa",
    body: "lorem ipsum"
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          posts.map((item) => {
            return <Post title={item.title} sub={item.sub} body={item.body}/>
          })
        }

        
      </header>
    </div>
  );
};

export default App;
