"use client";
// src/components/foo-page-wrapper-something.tsx

import type { ReactNode } from "react";
import Navbar from "./Navbar";
import { SessionProvider } from 'next-auth/react';
// import { Footer } from "@/components/organisms/Footer";

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
        <Navbar></Navbar>
        {children}
      {/* <Footer /> */}
    </SessionProvider>
  );
};