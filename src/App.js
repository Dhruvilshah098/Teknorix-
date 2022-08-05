import './App.css';
// import {BrowserRouter,Routes,Route} from "react-router-dom";
import SearchBox from "./Components/SearchBox"
// import Data from "./Components/Data"
// import Sample from './Sample';


function App() {
  return (
    <div className="App">
{/* <Sample /> */}
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
