import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../core/context/AuthContext";

/** Guards admin-only routes. Visitors never need to sign in. */
export default function ProtectedRoute() {
  const { isAdmin } = useAuth();
  const location = useLocation();
  if (!isAdmin)
    return (
      <Navigate
        to={`/admin/login?next=${encodeURIComponent(location.pathname + location.search)}`}
        replace
      />
    );
  return <Outlet />;
}
