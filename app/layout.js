import '@/app/globals.css';
import Navbar from '@/app/_components/NavBar/Navbar';
import Footer from '@/app/_components/Footer/Footer';
import localFont from 'next/font/local';

export const metadata = {
  title: 'Abdullah Hosen Akash',
  description: 'Full Stack Web Developer'
};

const consolas = localFont({
  src: '../app/_assets/fonts/consolas.ttf',
  display: 'swap'
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={consolas.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
