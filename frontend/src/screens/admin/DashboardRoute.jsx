import React from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
import Products from './Products';
import Orders from './Orders';
import Users from './Users';
import Reviews from './Reviews';
import CreateProduct from './CreateProduct';

const DashboardRoute = () => {
  const location = useLocation();
  return (
    <div className="w-full grid grid-cols-12 h-[90vh]">
        {/* side bar */}
        <div className="sm:col-span-2 bg-gray-50 text-gray-900 shadow px-4">
            <NavLink to={"/account/admin/dashboard"} className={`block text-base rounded my-1 p-4 hover:bg-gray-200 ${location.pathname === '/account/admin/dashboard' ? 'bg-gray-200' : ''}`}>Dashboard</NavLink>
            <NavLink to={"/account/admin/products"} className={`block text-base rounded my-1 p-4 hover:bg-gray-200 ${location.pathname === '/account/admin/products' ? 'bg-gray-200' : ''}`}>Products</NavLink>
            <NavLink to={"/account/admin/product/new"} className={`block text-base rounded my-1 p-4 hover:bg-gray-200 ${location.pathname === '/account/admin/product/new' ? 'bg-gray-200' : ''}`}>Create Product</NavLink>
            <NavLink to={"/account/admin/orders"} className={`block text-base rounded my-1 p-4 hover:bg-gray-200 ${location.pathname === '/account/admin/orders' ? 'bg-gray-200' : ''}`}>Orders</NavLink>
            <NavLink to={"/account/admin/reviews"} className={`block text-base rounded my-1 p-4 hover:bg-gray-200 ${location.pathname === '/account/admin/reviews' ? 'bg-gray-200' : ''}`}>Reviews</NavLink>
            <NavLink to={"/account/admin/users"} className={`block text-base rounded my-1 p-4 hover:bg-gray-200 ${location.pathname === '/account/admin/users' ? 'bg-gray-200' : ''}`}>Users</NavLink>
        </div>

        {/* main content */}
        <div className="sm:col-span-10 bg-gray-50 text-gray-900 shadow-md p-4 overflow-y-auto">
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route exact path="/products" element={<Products />} />
                <Route exact path="/product/new" element={<CreateProduct />} />
                <Route exact path="/orders" element={<Orders />} />
                <Route exact path="/reviews" element={<Reviews />} />
                <Route exact path="/users" element={<Users />} />
            </Routes>
        </div>
    </div>
  )
}

export default DashboardRoute;