import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import MBA from "./pages/MBA";
import MBAFaculty from "./pages/MBAFaculty";

function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <h1 className="text-5xl font-bold text-[#0b2d4d]">
        PIRENS IBMA
      </h1>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/department/mba/faculty" element={<MBAFaculty />} />
        <Route path="/department/mba" element={<MBA />} />
       <Route
  path="/mba"
  element={
    <div className="p-10 text-3xl font-bold">
      MBA ROUTE WORKING
    </div>
  }
/>

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;