import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './conpanets/Header';
import ToDo from './conpanets/ToDo';
import Product from './conpanets/Product.jsx';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/'/>
      <Route path='/toDo' element={<ToDo/>}/>
      <Route path='/product' element={<Product/>}/>
     </Routes>
    </div>
  );
}

export default App;
