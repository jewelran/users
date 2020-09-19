import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './component/user/Users';
function App() {
  const [users, setUsers] = useState([]); // for random users....
  const [addTeam, setAddTeam]  = useState([]); // for addTeam ....
      useEffect(() => {
      fetch('https://randomuser.me/api/?results=15')
      .then(res => res.json())
      .then(data =>{
        // console.log(data.results)
        setUsers(data.results)
      })
    },[])
    const addMembers = (name) => {
      console.log('added mambers' , name)
      setAddTeam([...addTeam, name])
    }
  return (
    <div className="App">
      <header className="App-header">
      <h2>Total Users:{users.length}</h2>
      <ul className= "menberList">
        {
          addTeam.map( add => <div className = 'add_conatiner'>{add}</div>) // for add team map....
        }
      </ul>
       {
         users.map(user =><Users user = {user} addMembers ={addMembers}></Users> ) //for users ....
       }
       
      </header>
    </div>
  );
}

export default App;
