import "./index.css";
import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
// import ImageSlide from "./Components/ImageSlide";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              {/* <ImageSlide /> */}
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
