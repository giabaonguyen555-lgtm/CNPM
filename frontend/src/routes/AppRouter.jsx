import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ExplorePage from "../pages/ExplorePage";
import LocationDetailPage from "../pages/LocationDetailPage";
import AuthPage from "../pages/AuthPage";
import PaywallPage from "../pages/PaywallPage";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundPage from "../pages/NotFoundPage";

const MapPage = lazy(() => import("../pages/MapPage"));
const AboutUsPage = lazy(() => import("../pages/AboutUsPage"));
const AdminDashboardPage = lazy(() => import("../pages/AdminDashboardPage"));

function RouteLoading() {
  return (
    <div className="container flex min-h-[40vh] items-center justify-center py-16" role="status">
      <p className="text-sm text-slate-500">Loading page…</p>
    </div>
  );
}

export default function AppRouter() {
  return (
    <Suspense fallback={<RouteLoading />}>
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/location/:id" element={<LocationDetailPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/paywall" element={<PaywallPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/admin/login" element={<AuthPage />} />
        <Route path="/login" element={<Navigate to="/admin/login" replace />} />
        <Route path="/register" element={<Navigate to="/paywall" replace />} />
        <Route path="/favorites" element={<Navigate to="/" replace />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminDashboardPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
