import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Sidebar from './components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quality & Productivity Metrics',
  description: 'Helping teams deliver better software, faster.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Sidebar />
          <main className="ml-20 w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
