import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DashboardPage from "./pages/DashboardPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import ApartmentForm from"./pages/ApartmentForm";
import { useState } from "react";
import information from "./data/information.json"

function App() {
   const [apartment,setApartment]=useState(()=>information.results);
   const handleAdd = (apt) => {const id = (crypto?.randomUUID && crypto.randomUUID()) || Date.now();
   setApartment((prev) => [...prev, { ...apt,id }]);
 };
   const handleRemove = (id) => {
   setApartment((prev) => prev.filter((it) => it.id !== id));
 };

  return (
    <>
      <div className="App">
        <header className="App-header"></header>
        <Navbar />
        <div className="Pages">
          <Routes>
            <Route path="/" element={<DashboardPage apartment={apartment} onRemove={handleRemove}  />} />

            <Route path="/item/:itemId" element={<ItemDetailsPage />} />

            <Route path="/about" element={<AboutPage />} />

            {/* <Route path="/ItemDetails" element={<ItemDetailsPage />}/> */}

            <Route path="*" element={<NotFoundPage />} />
            
            <Route path="/apartmentformpage" element={<ApartmentForm apartment={apartment} onAdd={handleAdd}/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}


export default App;
