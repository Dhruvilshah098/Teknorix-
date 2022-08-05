import './App.css';
// import {BrowserRouter,Routes,Route} from "react-router-dom";
import SearchBox from "./Components/SearchBox"
// import Data from "./Components/Data"


function App() {
  return (
    <div className="App">
<SearchBox/>
{/* <Data/> */}
{/* 
    <BrowserRouter>
      <Routes>
    
        <Route  path="/" element={<SearchBox />} />
        <Route path="/:id" component={<Data />} />
    
    </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
