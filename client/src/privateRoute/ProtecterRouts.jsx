import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ userType }) => {
  const client = localStorage.getItem('client')
    ? JSON.parse(localStorage.getItem('client'))
    : null;

  if (!client) {
    return <Navigate to="/login" replace />;
  }

  if (client.userType !== userType) {
    return <Navigate to={`/${client.userType}`} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;