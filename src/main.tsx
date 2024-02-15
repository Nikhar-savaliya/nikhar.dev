import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe.tsx";
import Projects from "./pages/Projects.tsx";
import Articles from "./pages/Articles.tsx";
import NotFound from "./pages/NotFound.tsx";
import App from "./App.tsx";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="articles" element={<Articles />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

export default AppRouter;
