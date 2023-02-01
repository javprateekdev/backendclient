import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddFlatweb from './components/CompareTool/AddFlatweb';
import AddPropertycomp from './components/CompareTool/AddProperty';
import AllData from "./components/Website/AllDatapage";
import AddPropertyweb from './components/Website/AddProperty';
import AllDatapage from "./components/Website/AllDatapage";

import Topbar from "./components/Topbar";

function App() {
  return (
    <Router>
      
      <Topbar/>
      <SideBar>
        
     
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/AllData" element={<AllData />} />
          <Route path="/AddFlat" element={<AddFlatweb />} />
          <Route path="/AddPropertyweb" element={<AddPropertyweb />} />
          <Route path="/AddPropertycomp" element={<AddPropertycomp />} />
          <Route path="/AllDatapage" element={<AllDatapage />} />
          <Route path="/AllDatapage" element={<AllDatapage />} />
          <Route path="/AllDatapage" element={<AllDatapage />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
