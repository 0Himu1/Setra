import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Instagram from '@/components/Instagram';

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        <main className="bg-dimWhite">{children}</main>
        <Instagram />
        <Footer />
      </body>
    </html>
  );
}
