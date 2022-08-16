import'./App.css';
import SearchBox from './Components/SearchBox';
import { Route, BrowserRouter, Routes } from 'react-router-dom'  
import Data from './Components/Data';

function App() {
  return (
    <div className="App">  
    <BrowserRouter>
      <Routes>
    
        <Route exact path="/" element={<SearchBox />} />
        <Route path="/:id" element={<Data />} />
    
    </Routes>
    </BrowserRouter>
    {/* <SearchBox /> */}
    </div>
  );
}

export default App;
