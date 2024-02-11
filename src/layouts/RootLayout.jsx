import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Providers from "../components/Providers";
import Footer from "../components/Footer/Footer";

function RootLayout() {
  return (
    <Providers>
      <div className="container">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </Providers>
  );
}
export default RootLayout;
