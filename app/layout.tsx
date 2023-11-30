// 'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
// import { SessionProvider } from 'next-auth/react';
import { AppWrapper } from './components/AppWrapper'
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Srikandi E-Commerce',
  description: 'Srikandi Jewellery E-Commerce - Online Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="valentine">
      <body className={inter.className}>
        <AppWrapper>{children}</AppWrapper>
        {/* <SessionProvider>
          <Navbar></Navbar>
          {children}
        </SessionProvider> */}
      </body>
    </html>
  )
}
