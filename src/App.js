//import 
import { Routes, Route } from 'react-router-dom';

//pages
import Layout from './components/layout/layout.component';

import logo from './logo.svg';
import './App.scss';
import Home from './components/home/home.component';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}> 
      <Route index element={<Home />} />

    </Route>
    </Routes>
    
    </>
  );
}

export default App;
