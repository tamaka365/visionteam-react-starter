import { Routes, Route } from "react-router-dom";

import Demo from "src/pages/Demo/index";
import Playground from "src/pages/Playground";
import LayoutDemo from "src/pages/Demo/LayoutDemo";
import Linaria from "src/pages/Demo/Linaria";

export default function DevRouter() {
  return (
    <Routes>
      <Route path="/" element={<Demo />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/layout" element={<LayoutDemo />} />
      <Route path="/linaria" element={<Linaria />} />
    </Routes>
  );
}
