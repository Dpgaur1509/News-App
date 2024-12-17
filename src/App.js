
import { useState } from 'react';
import './App.css';
import Navbar from './components/assets/Navbar';
import NewsBoard from './components/assets/NewsBoard';



function App() {
  const [category,setCategory]=useState("general");
  return (
    <div>
     <Navbar setCategory={setCategory}/>
     <NewsBoard category={category}/>
    </div>
  );
}

export default App;
