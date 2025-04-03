import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css'; // Import Mantine styles
import './globals.css';

export const metadata = {
  title: 'Lalal Food Festival',
  description: 'Food festival website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
