import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DashboardPage from "./pages/DashboardPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header"></header>
        <Navbar />
        <div className="Pages">
          <Routes>
            <Route path="/" element={<DashboardPage />} />

            <Route path="/id" element={<ItemDetailsPage />} />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/ItemDetails" element={<ItemDetailsPage />}/>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default App;
