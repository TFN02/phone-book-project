import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";
import Footer from "./components/Footer";
import { appContainer, main } from "./styles/global.style";

function App() {
  return (
    <>
      <div css={[appContainer]}>
        <Navbar />
        <main css={[main]}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts/new" element={<AddPage />} />
            <Route path="/contacts/:id" element={<DetailPage />} />

            <Route path="*" element={<p>404 Not Found</p>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
