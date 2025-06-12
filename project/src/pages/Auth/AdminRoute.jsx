import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const role = localStorage.getItem("role"); // Or use context if available
  if (!role || role !== "admin") return <Navigate to="/" />;
  return children;
};

export default AdminRoute;
