import { Outlet } from "react-router-dom"; // Importera Outlet
import "./AppLayout.css";
import Footer from "./Footer";
import Header from "./Header";

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
