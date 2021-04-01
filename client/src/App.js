// Import dependencies
import React, {useEffect} from 'react';
import "./App.css";
import Chat from './components/chat/Chat'
// Import action
import { createSession } from "./actions/watson";

// Import axios
import axios from "axios";
import store from "./store";


const App = () => {
if (localStorage.session) {
  delete axios.defaults.headers.common["session_id"];
  axios.defaults.headers.common["session_id"] = localStorage.session;
} else {
  delete axios.defaults.headers.common["session_id"];
}

useEffect(() => {
  // Check if there session
  if (!localStorage.session) {
    // Create a session
    store.dispatch(createSession());
  }
});
  return (
      <div className="container">
      <Chat/>
      </div>
  );
};

export default App;
