import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA4El0SHGsH31K0luD8DqcpfDfbyHFKk0Q",
  authDomain: "fir-helloworld-cloud.firebaseapp.com",
  projectId: "fir-helloworld-cloud",
  storageBucket: "fir-helloworld-cloud.appspot.com",
  messagingSenderId: "105671768368",
  appId: "1:105671768368:web:c640d5649a7f2e50f4b0f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);









function App() {

  const[postText, setPostText] = useState("");
  const[posts, setPosts] = useState([]);
  const[isLoading, setIsloading] = useState(false);



  useEffect( () => {


  },[])



  const savePost = (e) => {
    e.preventDefault();
    console.log("PostText:", postText)
  }







  return (
    <div className="App">
      <h1>Firebase HelloWorld</h1>
     <p>Add Todo</p>

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





     
     
    </div>
  );
}

export default App;
