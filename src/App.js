import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from "./users/AddUser";
import Navbar from "./layout/Navbar";
// import ViewUser from "./layout/ViewUser";
import Home from "./pages/Home";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          {/* <Route path="/edituser" element={<EditUser />} /> */}
          {/* <Route path="/viewuser" element={<ViewUser />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
