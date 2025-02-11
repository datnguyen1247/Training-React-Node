import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import EditTranslation from "./pages/editTransition";
const HomePage = lazy(() => import("./pages/home"));
const Customization = lazy(() => import("./pages/customization"));
const Translation = lazy(() => import("./pages/translation"));
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customization" element={<Customization />} />
        <Route path="/translation" element={<Translation />} />
        <Route path="/translation/1" element={<EditTranslation />} />
      </Routes>
    </>
  );
}

export default App;
