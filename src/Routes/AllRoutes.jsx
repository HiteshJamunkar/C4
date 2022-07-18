import { Routes, Route } from "react-router-dom";
import AddDoctor from "./AddDoctor";
import Home from "./Home";
import AddHospital from "./AddHospital";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctoradd" element={<AddDoctor />} />
      <Route path="/hospitaladd" element={<AddHospital />} />
    </Routes>
  );
}