import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AuthRedirect = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-400"></div>
      </div>
    );
  }

  if (user) {
    // Redirect to dashboard based on user role
    return <Navigate to="/dashboard" replace />;
  }

  return <Navigate to="/login" replace />;
};

export default AuthRedirect;
