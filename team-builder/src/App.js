import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import MemberList from './MemberList';

function App() {
  const [members, setMembers] = useState([]);
  return (
    <div className="App">
      <MemberList members={members} />
      <Form members={members} setMembers={setMembers}/>
    </div>
  );
}

export default App;
