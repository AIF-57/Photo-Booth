import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import useAuth from "../hooks/useAuth";
import { ProfileProvider } from "../providers";

export default function PrivateRoutes() {
  const { auth } = useAuth();
  return (
    <>
      {auth.accessToken ? (
        <>
          <ProfileProvider>
            <Sidebar />
            <main className="">
              <Outlet />
            </main>
          </ProfileProvider>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
