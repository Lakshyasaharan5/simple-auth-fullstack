import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import Dashboard from "./pages/Dashboard";

function App() {
    const { user } = useAuth();

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />

            <Route
                path="/login"
                element={user ? <Navigate to="/dashboard" /> : <LoginForm />}
            />

            <Route path="/register" element={<RegisterForm />} />

            <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
            />
        </Routes>
    );
}

export default App;
