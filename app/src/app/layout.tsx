import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import Header from './components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Polymathon',
  description: 'Application de mots tarabiscotés sans être abscons',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header>{children}</Header>
      </body>
    </html>
  );
}
