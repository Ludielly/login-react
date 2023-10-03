import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthContext, AuthProvider } from "./contexts/auth";
import { useContext } from "react";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="loading">Carregando...</div>;
    }
    
    if (!authenticated) {
        return <Navigate to="/login" />
    }

    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Private><Home /></Private>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
