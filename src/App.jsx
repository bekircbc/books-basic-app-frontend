import "./App.scss";
import { PageNouns } from "./pages/PageNouns";
import { PageBooks } from "./pages/PageBooks";
import { PageUseToggle } from "./pages/PageUseToggle";
import { PageAbout } from "./pages/PageAbout";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>React Custom Hooks</h1>
      <hr />
      <NavLink to="/about">About</NavLink> |{" "}
      <NavLink to="/nouns">Nouns</NavLink> |{" "}
      <NavLink to="/books">Books</NavLink> |{" "}
      <NavLink to="/use-toggle">UseToggle</NavLink> <hr />
      <Routes>
        <Route path="/about" element={<PageAbout />} />
        <Route path="/nouns" element={<PageNouns />} />
        <Route path="/books" element={<PageBooks />} />
        <Route path="/use-toggle" element={<PageUseToggle />} />

        <Route path="/" element={<Navigate to="/about" replace />} />
      </Routes>
    </div>
  );
}

export default App;
