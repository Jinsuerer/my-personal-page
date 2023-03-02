import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MyProjects from "./pages/MyProjects";
import MySkills from "./pages/MySkills";
import NotFound from "./pages/NotFound";

function App() {
  return (
  
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/myskills' element={<MySkills/>}></Route>
      <Route path='/myprojects' element={<MyProjects/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/*' element={<NotFound/>}></Route>
    
      </Routes>
      <Footer/>
      </BrowserRouter>
      
  );
}

export default App;
