import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import Applayout from "./pages/Applayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";

export default function App() {
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

            <Route path="cities" element={<p>List of cities </p>} />
            <Route path="countries" element={<p>Countries </p>} />
            <Route path="form" element={<p>Form</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
