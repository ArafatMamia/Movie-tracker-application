import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AddMovie from './components/AddMovie'
import UpdateMovie from './components/UpdateMovie'
function App() {
  return (
    //BEM naming convention
    <Router>
    <div className="app">
      <Routes>
        <Route path="/" element={[<Header />, <Home />]} />
        <Route path="/addMovie" element={<AddMovie />} />
        <Route path="/updateMovie" element={[<Header />, <UpdateMovie />]} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
