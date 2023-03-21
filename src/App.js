import image from './shop.jpg'
import foto from './shoptwo.jpg'
import './App.css';

import  { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='app'>
      <img src={image} alt="shop" width="400px" /> 
      <h1>Grocery List</h1>
      <GroceryList />
      <img src={foto} alt="shoptwo" width="400px"/>
    </div>
  );
}


export default App;
