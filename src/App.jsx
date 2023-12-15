import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import Wishlist from "./Pages/Wishlist";
import Basket from "./Pages/Basket";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/wishlist" element={<Wishlist></Wishlist>} />
          <Route path="/basket" element={<Basket></Basket>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
