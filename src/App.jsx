import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Layout/Navbar";
import { Footer } from "./components/Layout/Footer";
import { CustomCursor } from "./components/UI/CustomCursor";
import { LoadingScreen } from "./components/UI/LoadingScreen";
import { ParticleBg } from "./components/UI/ParticleBg";
import { BackToTop } from "./components/UI/BackToTop";
import { Home } from "./pages/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Smooth entry transitions and body lock during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <Router>
      <div className="relative min-h-screen w-full bg-[#0F172A] overflow-hidden">
        {/* Entrance Loader */}
        <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {/* Global Page Utilities */}
        <ParticleBg />
        <CustomCursor />
        <BackToTop />

        {/* Content Layout */}
        {!isLoading && (
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                {/* Fallback route back to home */}
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
