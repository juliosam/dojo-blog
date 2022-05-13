import Navbar from "./Navbar.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Create from "./Create.js";
import { Routes } from "react-router-dom";
import BlogDetails from "./BlogDetails.js";
import NotFound from "./NotFound.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}>
            </Route>
            <Route path="/create" element={<Create/>}>
            </Route> 
            <Route path="/blogs/:id" element={<BlogDetails/>}>
            </Route> 
            <Route path="*" element={<NotFound/>}>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
