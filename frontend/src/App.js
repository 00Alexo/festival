import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <div className='App min-h-screen flex flex-col bg-amber-50  pt-[120px]'>
          <Routes> 
            <Route path = "/" element={<HomePage/>}/>
            <Route path = "/home" element={<HomePage/>}/>
            <Route path = "/homepage" element={<HomePage/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;