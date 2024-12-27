import { Space_Grotesk, Roboto } from 'next/font/google';
import './globals.css';
import ResponsiveNav from '@/components/Home/Navbar/ResponsiveNav';

// Load Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '700'], // Removed unsupported weights
  subsets: ['latin'],
});

// Load Roboto font with supported weights
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'], // Only supported weights
  subsets: ['latin'],
});

export const metadata = {
  title: 'AspireAcademy - Learn and Grow',
  description: 'E-learning website using next js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} ${roboto.className}`}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
