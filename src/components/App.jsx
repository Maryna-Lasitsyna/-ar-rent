import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'))
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));


export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
