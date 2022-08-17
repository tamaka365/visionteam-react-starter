import { Routes, Route } from "react-router-dom";

import Demo from "src/pages/Demo/index";
import Playground from "src/pages/Playground";
import LayoutDemo from "src/pages/Demo/LayoutDemo";

export default function DevRouter() {
  return (
    <Routes>
      <Route path="/" element={<Demo />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/layout" element={<LayoutDemo />} />
    </Routes>
  );
}
