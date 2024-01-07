import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="text-zinc-950 bg-zinc-50 font-sans">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
