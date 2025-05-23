import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import FooTer from './components/FooTer';
import Editii from './pages/Editii';
import NotFound from './pages/NotFound';
import Jurnal from './pages/Jurnal';
import JurnalUpload from './components/JurnalUpload';
import Regulament from './pages/Regulament';
import Galerie from './pages/Galerie';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <div className='App min-h-screen flex flex-col bg-amber-50  pt-[80px]'>
          <Routes> 
            <Route path = "*" element={<NotFound/>}/>
            <Route path = "/" element={<HomePage/>}/>
            <Route path = "/home" element={<HomePage/>}/>
            <Route path = "/homepage" element={<HomePage/>}/>
            <Route path = "/editii/:editie" element={<Editii/>}/>
            <Route path = "/jurnal" element={<Jurnal/>}/>
            <Route path = "/jurnal/upload" element={<JurnalUpload/>}/>
            <Route path = "/regulament" element={<Regulament/>}/>
            <Route path = "/galerie" element = {<Galerie/>}/>
          </Routes>
        </div>
        <FooTer/>
      </div>
    </BrowserRouter>
  );
}

export default App;