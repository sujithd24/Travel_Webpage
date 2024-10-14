import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './pages/Layout/Layout';
import Home from "./pages/Home/Home";
import Kerala from './pages/Places/Kerala/Kerala';
import Delhi from "./pages/Places/Delhi/Delhi";
import France from "./pages/Places/France/France";
import Shimla from "./pages/Places/Shimla/Shimla";
import Paris from "./pages/Places/Paris/Paris";
import About from "./pages/About/About";


/*

*/

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home/>} />
              <Route path="/kerala" element={<Kerala/>}/>
              <Route path="/delhi" element={<Delhi />}/>
              <Route path="/france" element={<France/>}/>
              <Route path="/switzerland" element={<Shimla/>}/>
              <Route path="/germany" element={<Paris/>}/>
              <Route path="/about" element={<About/>} />
            </Route>            
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
