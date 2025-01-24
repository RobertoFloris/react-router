import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ListPost from "./pages/ListPost";

import LayoutDefault from "./layouts/layoutDefault";
import DettaglioPost from "./pages/DettaglioPost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={LayoutDefault}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/list" Component={ListPost} />
          <Route path="/dettaglio-post/:id" Component={DettaglioPost} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App