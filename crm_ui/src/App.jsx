import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import DashboardLayout from "./Components/dashboard/DashboardLayout";
import TicketList from "./Components/dashboard/Tickets/TicketList";
import TicketView from "./Components/dashboard/Tickets/TicketView";
import CreateTicket from "./Components/dashboard/Tickets/CreateTicket";
import MyProfile from "./Components/dashboard/Profile/MyProfile";
import Notification from "./Components/dashboard/Notification/Notification";
import Chat from "./Components/dashboard/Chat/Chat";
import Inbox from "./Components/dashboard/Inbox/Inbox";
import Events from "./Components/dashboard/Events/Event";
import Services from "./Components/dashboard/Services/Services";
import NotFound from "./Components/Pages/NotFound";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import ClientSupplier from "./Components/dashboard/Client/ClientSupplier"
import ForgotPassword from "./Components/auth/ForgotPassword";
import ResetPassword from "./Components/auth/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";

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
        element={user ? <Navigate to="/dashboard" replace /> : <Login />} 
      />
      <Route 
        path="/login" 
        element={user ? <Navigate to="/dashboard" replace /> : <Login />} 
      />
      <Route 
        path="/register" 
        element={user ? <Navigate to="/dashboard" replace /> : <Register />} 
      />
      <Route 
        path="/forgotPassword" 
        element={user ? <Navigate to="/dashboard" replace /> : <ForgotPassword />} 
      />
      <Route 
        path="/ResetPassword" 
        element={user ? <Navigate to="/dashboard" replace /> : <ResetPassword />} 
      />

      {/* Protected Routes */}
      <Route 
        path="/client&supplier" 
        element={
          <ProtectedRoute allowedRoles={["Client", "Supplier"]}>
            <ClientSupplier />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/dashboard/*" 
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<TicketList />} />
        <Route path="events" element={<Events />} />
        <Route path="services" element={<Services />} />
        <Route path="tickets/:id" element={<TicketView />} />
        <Route path="tickets/create" element={<CreateTicket />} />
        <Route path="profile" element={<MyProfile />} />
        <Route path="notification" element={<Notification />} />
        <Route path="chat" element={<Chat />} />
        <Route path="inbox" element={<Inbox />} />
      </Route>

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
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