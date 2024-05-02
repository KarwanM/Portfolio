import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<h1>Home</h1>}/>
          <Route path="/home" element={<h1>Home</h1>}/>
          <Route path="/about" element={<h1>About</h1>}/>
          <Route path="/contact" element={<h1>Contact</h1>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
