import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import Applayout from "./pages/Applayout";
import PageNotFound from "./pages/PageNotFound";
import CitesList from "./components/CitesList";
import Login from "./pages/Login";
import { useEffect, useState } from "react";

export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/cities");
        const data = await res.json();
        setCities(data);
        setIsLoading(false);
      } catch {
        alert("There is some error loadinf data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="app" element={<Applayout />}>
            <Route index element={<p>List of Cities</p>} />
            <Route
              index
              element={<CitesList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="cities"
              element={<CitesList cities={cities} isLoading={isLoading} />}
            />
            <Route path="countries" element={<p>Countries </p>} />
            <Route path="form" element={<p>Form</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
