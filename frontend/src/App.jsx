import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserHome from "./pages/UserHome";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/dashboard/Layout";
import Inventory from "./pages/Inventory";
import toast, { Toaster } from "react-hot-toast";
import Modal from "./pages/Modal";
function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogout />} />
          <Route path='/modal' element={<Modal/> }/>
          <Route path="/notfound">
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<UserHome />} />
            <Route path="inventory" element={<Inventory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
