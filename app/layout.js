import '@/app/globals.css';
import Navbar from '@/app/_components/NavBar/Navbar';
import Footer from './_components/Footer/Footer';

export const metadata = {
  title: 'Abdullah Hosen Akash',
  description: 'Full Stack Web Developer'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
