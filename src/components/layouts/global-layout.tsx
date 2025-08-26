import { Route, Routes } from "react-router-dom";
import { Footer } from "./layout-specifics/footer";
import { Header } from "./layout-specifics/header";
import { Home } from "@/features/home";
import { Journey } from "@/features/journey";
import { Surprise } from "@/features/surprise";
import { Contact } from "@/features/contact";

export const GlobalLayout = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="journey" element={<Journey />} />
        <Route path="surprise" element={<Surprise />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};
