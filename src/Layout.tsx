import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Contact from "./components/Contact";

const Layout: React.FC = () => {
  return (
    <div className="text-zinc-950 bg-zinc-50 font-sans">
      <Header />
      <Outlet />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
