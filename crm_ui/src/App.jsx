import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import ForgotPasswordForm from "./components/auth/ForgotPasswordForm";
import ResetPasswordForm from "./components/auth/ResetPasswordForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SuperAdminDashboard from "./components/dashboards/SuperAdminDashboard";
import RepresentativeDashboard from "./components/dashboards/RepresentativeDashboard";
import ClientDashboard from "./components/dashboards/ClientDashboard";

const DashboardRouter = () => {
  const { user } = useAuth();
  
  switch (user?.role) {
    case 'SuperAdmin':
      return <SuperAdminDashboard />;
    case 'Representative':
      return <RepresentativeDashboard />;
    case 'Client':
      return <ClientDashboard />;
    default:
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard</h1>
            <p className="text-gray-600">You are successfully authenticated!</p>
          </div>
        </div>
      );
  }
};

const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-400"></div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route 
        path="/" 
        element={user ? <Navigate to="/dashboard" replace /> : <LoginForm />} 
      />
      <Route 
        path="/login" 
        element={user ? <Navigate to="/dashboard" replace /> : <LoginForm />} 
      />
      <Route 
        path="/register" 
        element={user ? <Navigate to="/dashboard" replace /> : <RegisterForm />} 
      />
      <Route 
        path="/forgotPassword" 
        element={user ? <Navigate to="/dashboard" replace /> : <ForgotPasswordForm />} 
      />
      <Route 
        path="/ResetPassword" 
        element={user ? <Navigate to="/dashboard" replace /> : <ResetPasswordForm />} 
      />

      {/* Protected Routes */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <DashboardRouter />
          </ProtectedRoute>
        } 
      />

      {/* 404 Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const App = () => (
  <AuthProvider>
    <Router>
      <AppRoutes />
    </Router>
  </AuthProvider>
);

export default App;