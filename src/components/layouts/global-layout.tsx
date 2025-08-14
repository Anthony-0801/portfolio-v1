import { Route, Routes } from "react-router-dom";
import { Footer } from "./layout-specifics/footer";
import { Header } from "./layout-specifics/header";
import { Home } from "@/features/home";

export const GlobalLayout = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};
