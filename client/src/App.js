import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "./MainPage";
import FlavorPage from "./FlavorPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/flavor" element={<FlavorPage/>} />
      </Routes>
    </Router>
  );
}

export default App;