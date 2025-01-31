import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Auth from './pages/Auth/Auth';
import ProductsOverview from './components/concepts/products/ProductsOverview';
import CreateProduct from './components/concepts/products/CreateProduct';
import EditProduct from './components/concepts/products/EditProduct';
import ViewProduct from './components/concepts/products/ViewProduct';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route path="/auth" element={<Auth />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Dashboard />}>
          <Route path="" element={<div>Welcome to the Admin Dashboard</div>} />
          <Route path="products" element={<ProductsOverview />} />
          <Route path="products/create" element={<CreateProduct />} />
          <Route path="products/edit/:id" element={<EditProduct />} />
          <Route path="products/view/:id" element={<ViewProduct />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
