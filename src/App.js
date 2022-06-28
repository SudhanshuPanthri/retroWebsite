import "./App.css";
import Greeting from "./screens/Greeting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Name from "./screens/Name";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Greeting />} />
        <Route path="/name" element={<Name />} />
      </Routes>
    </Router>
  );
}

export default App;
