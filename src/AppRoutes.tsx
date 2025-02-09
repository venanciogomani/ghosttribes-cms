import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Auth from './pages/Auth/Auth';
import ProductsOverview from './components/concepts/products/ProductsOverview';
import CreateProduct from './components/concepts/products/CreateProduct/CreateProduct';
import EditProduct from './components/concepts/products/EditProduct';
import ViewProduct from './components/concepts/products/ViewProduct';
import Overview from './components/concepts/overview/Overview';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Providers>
        <Routes>
          <Route path="/" element={<Navigate to="/auth" replace />} />
          <Route path="/auth" element={<Auth />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Dashboard />}>
            <Route path="" element={<Overview />} />
            <Route path="products" element={<ProductsOverview />} />
            <Route path="products/create" element={<CreateProduct />} />
            <Route path="products/edit/:id" element={<EditProduct />} />
            <Route path="products/view/:id" element={<ViewProduct />} />
          </Route>

          {/* 404 Page */}
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </Providers>
    </BrowserRouter>
  );
}

interface IProviders {
  children: React.ReactNode;
  queryClient?: QueryClient;
}
function Providers({ children, queryClient = new QueryClient() }: IProviders) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
