// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './compo/pages/Add'
import Show from './compo/pages/Show'
import Update from './compo/pages/Update'
import Delete from './compo/pages/Delete'
import Navbar from './compo/layout/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/add' element={<Add/>}></Route>
      <Route path='/show' element={<Show/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route>
      <Route path='/delete/:id' element={<Delete/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
