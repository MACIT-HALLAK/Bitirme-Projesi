import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Navigate, Outlet } from 'react-router-dom';
const PrivateRoutes = () => {
  const [cookies, setCookies] = useCookies(['email']);

  return cookies.email ? <Outlet /> : <Navigate to="/Login" />;
};

export default PrivateRoutes;
