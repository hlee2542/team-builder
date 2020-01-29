import React, {useState} from 'react';
import './App.css';
import Form from './Form';

function App() {
  const [members, setMembers] = useState([]);
  return (
    <div className="App">
      <Form members={members} setMembers={setMembers}/>
    </div>
  );
}

export default App;
