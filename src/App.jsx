import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layoute from "./pages/layoute";
import ErrorPage from "./components/ErrorPage";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layoute />}>
            <Route path="/" element={<Home/>} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
