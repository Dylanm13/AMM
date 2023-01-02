import {Routes, Route} from "react-router-dom"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ArtistsPage from "./pages/ArtistsPage";


import "./main.css"



function App() {
  return (
   <div>
    <div className="App">
      {<Navbar />}
      <Routes>
        <Route path="/AMM" element={<Home />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {<Footer />}
    </div>
   </div>
  );
}

export default App;
