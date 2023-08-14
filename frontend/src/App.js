import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Search from './component/Search';
import { useState } from 'react';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState('') 

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log(word);
    fetch(`https://api.unsplash.com//photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
    .then((res) => res.json()) //callback function
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <Header title = "Bunny Image" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
