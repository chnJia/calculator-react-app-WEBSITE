import "./App.css"
import { Route, Routes, useNavigate } from "react-router-dom";
import { Calculator } from "./components/Calculator";
import { Support } from "./pages/Support";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Calculator />} />
      <Route path="/Support" element={<Support />} />
    </Routes>
  );
}

export default App;