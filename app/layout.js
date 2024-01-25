import '@/app/globals.css';
import Navbar from '@/components/NavBar/Navbar';

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
      </body>
    </html>
  );
}
