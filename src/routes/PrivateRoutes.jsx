import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import useAuth from "../hooks/useAuth";
import { ProfileProvider } from "../providers";
import PostProvider from "../providers/PostProvider";

export default function PrivateRoutes() {
  const { auth } = useAuth();
  return (
    <>
      {auth.accessToken ? (
        <>
          <PostProvider>
            <ProfileProvider>
              <Sidebar />
              <main className="">
                <Outlet />
              </main>
            </ProfileProvider>
          </PostProvider>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
