import { Outlet } from "react-router-dom"; // Importera Outlet
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/AppLayout.css";

function AppLayout() {
  return (
    <>
      <Header />
      <div className="app-container">
        <div className="todos-container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
