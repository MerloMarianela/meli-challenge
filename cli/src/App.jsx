import { Route, Routes } from "react-router-dom";
import { SearchBar } from "./components/searchBar/searchBar";
import { Home } from "./pages/home/home";
import style from "./app.module.scss";
import { ProductsList } from "./pages/productsList/productsList";
import { ProductDetail } from "./pages/productDetail/productDetail";
import { HelmetProvider } from "react-helmet-async";

export const App = () => {
  return (
    <HelmetProvider>
      <SearchBar />
      <div className={style.div}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/items" element={<ProductsList />} />
          <Route path="/items/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
};
