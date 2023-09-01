import { useState } from 'react';
import './App.css';
import MyComponent from "./MyComponent";


function App() {
  const[mySearch, setMySearch] = useState("");
  const[myNutrition, setMyNutrition] = useState([]);
  const[word, setWord] = useState('')
    let params = new URLSearchParams({ 
    app_id: '709477b2', 
    app_key: '8a859184993a871d375d220b09362a28', 
    ingr: '1 cup of sugar' 
  });
  fetch(`https://api.edamam.com/api/nutrition-data?${params}`)
  .then(response => response.json())
  .then(console.log)

    const myNutritionSearch = (e) => {
    setMySearch(e.target.value)
  }
  const makingSearch =(e) => {
    e.preventDefault()
    setWord(mySearch)
  }
  return (
    <div>
    <div className="App">
      <h1>Рассчитайте количество калорий:</h1>
      </div>
      <div className='container'>
        <form onSubmit={makingSearch}>
          <input className='search' placeholder='Search...' onChange={myNutritionSearch} value={mySearch} />
          <button>Поиск</button>
      </form>
      </div>
      {myNutrition.map(element =>(
        <MyComponent calories = {element.calories}
        totalNutrients = {element.totalNutrients}/>
      ))}
      </div>
  );
}

export default App;
