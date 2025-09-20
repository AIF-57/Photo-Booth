import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import useAuth from "../hooks/useAuth";

export default function PrivateRoutes() {
  const { auth } = useAuth();
  return (
    <>
      {auth.user ? (
        <>
          <Sidebar />
          <main className="ml-[var(--sidebar-width)] p-6">
            <Outlet />
          </main>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
