import Layout from '@/components/Layout';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Online Shop',
  description: 'A basic e-com site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className}  antialiased bg-white`}
      >
        <Toaster
          position='top-right'
          reverseOrder={false}
        />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
