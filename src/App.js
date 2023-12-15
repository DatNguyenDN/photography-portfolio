import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes";
import {motion} from 'framer-motion'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <AppRoutes/>
      </Router>
    </>
  );
}

export default App;
