import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const[postText, setPostText] = useState("");
  const[isLoading, setIsloading] = useState(false);



  useEffect( () => {


  },[])



  const savePost = (e) => {
    e.preventDefault();
  }







  return (
    <div className="App">

      <form onSubmit={savePost}>
          
        <textarea
         type="text"
          placeholder='add your todos ....'
          onChange={(e) => {
            setPostText(e.target.value)
          }}
          />
          <button type='submit'> Add Todo</button>

      </form>





     <h1>Firebase HelloWorld</h1>
     <p>Add Todo</p>
     
    </div>
  );
}

export default App;
