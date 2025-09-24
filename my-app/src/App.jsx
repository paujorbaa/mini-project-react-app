import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ApartmentList from "./components/ApartmentList";
function App() {
  return (
    <BrowserRouter>
      <>
        <div className="App">
          <header className="App-header"></header>
          <Navbar />
          <Sidebar />
          <Footer />
          <ApartmentList />
        </div>
      </>
    </BrowserRouter>
  );
}
export default App;
