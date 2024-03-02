import '@/app/globals.css';
import Navbar from '@/app/_components/NavBar/Navbar';
import localFont from 'next/font/local';
import Header from '@/app/_components/NavBar/Header';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

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
      <body className={`pb-20 ${consolas.className}`}>
        <Header>
          <Navbar />
        </Header>
        {children}
      </body>
    </html>
  );
}
