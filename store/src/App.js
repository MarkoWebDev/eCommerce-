import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./Pages";
import Footer from "./Footer";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="grid place-content-center h-screen">
          <ClipLoader color="#36d7b7" size={200} speedMultiplier={0.5} />
        </div>
      ) : (
        <BrowserRouter>
          <Pages></Pages>
          <Footer></Footer>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
