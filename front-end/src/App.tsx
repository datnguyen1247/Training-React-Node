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
        <Route
          path="/translation/edit/:translationId"
          element={<EditTranslation />}
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/customization" element={<Customization />} />
        <Route path="/translation" element={<Translation />} />
      </Routes>
    </>
  );
}

export default App;
