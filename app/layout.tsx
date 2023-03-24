import Navbar from './components/Navbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className="min-h-screen w-screen bg-gray-100">
          <main className="m-auto max-w-screen-2xl bg-white">
            <Navbar />
            {children}
          </main>
        </main>
      </body>
    </html>
  );
}
