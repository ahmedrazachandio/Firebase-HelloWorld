import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
// import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import getFirestore from "firebase/firestore";
import firebase from "firebase/app";
import { collection, addDoc } from "firebase/firestore"; 



const firebase.firebaseConfig = {
  apiKey: "AIzaSyA4El0SHGsH31K0luD8DqcpfDfbyHFKk0Q",
  authDomain: "fir-helloworld-cloud.firebaseapp.com",
  projectId: "fir-helloworld-cloud",
  storageBucket: "fir-helloworld-cloud.appspot.com",
  messagingSenderId: "105671768368",
  appId: "1:105671768368:web:c640d5649a7f2e50f4b0f5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.getFirestore(app);



function App() {

  const[postText, setPostText] = useState("");
  const[posts, setPosts] = useState([]);
  const[isLoading, setIsloading] = useState(false);



  useEffect( () => {


  },[])



  const savePost = async (e) => {
    e.preventDefault();
    console.log("PostText:", postText);


    try {
      const docRef = await addDoc(collection(db, "posts"), {
        text: postText,
        createdOn: new Date().getDate(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }



  }







  return (
    <div className="App">
      <h1>Firebase HelloWorld</h1>
     <h3>Social Media App</h3>

      <form onSubmit={savePost}>
          
        <input
         type="text"
          placeholder='add your minds ....'
          onChange={(e) => {
            setPostText(e.target.value)
          }}
          />
          <button type='submit'>Save Post</button>

      </form>





     
     
    </div>
  );
}

export default App;
