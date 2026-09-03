import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Contact from "./pages/contact";
import EntranceExams from "./pages/student corner/EntranceExams";

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

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* ENTRANCE EXAMS */}
          <Route
          path="/student-corner/entrance-exams"
          element={<EntranceExams />}
        />

      </Routes>


    </BrowserRouter>
  );
}

export default App;