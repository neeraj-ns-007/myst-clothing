import { Route, Routes } from "react-router-dom";
import Home from './pages/home/home';
import MaintainancePage from "./components/maintenancePage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/myst-clothing" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<MaintainancePage />} />
      </Routes>
    </>
  );
}

export default App;