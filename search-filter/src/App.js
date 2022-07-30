import React, { useState } from 'react';
import './App.css';
import ListItems from './ListItems';
import StyledDiv from './StyledDiv';

function App() {

  const namesList = ['Ant-man', 'Aquaman', 'Batman', 'Black Panther', 'Captain America', 'Daredevil', 'Doctor Strange', 'Fantastic Four', 'Hellboy', 'Guardians of the Galaxy', 'Incredible Hulk', 'Iron Fist', 'Iron Man', 'Spider-Man', 'Superman', 'Thor', 'Wolverine', 'Wonder Woman'];
  const [name, setName] = useState('');
  const [filteredList, setList] = useState([...namesList]);
  

  const handleChange = (e) => {

    setName(e.target.value);

    const regex = new RegExp(e.target.value, 'gi');

    const filteredArray = namesList.filter(item => {

      if(item.match(regex)){
        return item;
      }

    });

    setList(filteredArray);

  }

  return (
    
    <StyledDiv>

      <h1 style={{textAlign: 'center', padding: 10}}>List of Heroes</h1>

      <div style={{display: 'flex', justifyContent: 'center'}}>
        <input className='input' type='text' value={name} placeholder="Insert the name" onChange={handleChange}/>
      </div>

        <ul>

          <ListItems list={filteredList} />

        </ul>

      </StyledDiv>

  );

}

export default App;
