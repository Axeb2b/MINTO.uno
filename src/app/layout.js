import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

export const metadata = {
  title: 'Minto.uno - Premium DeFi Platform',
  description:
    'Advanced DeFi platform with yield farming, token swapping, staking, and synthetic asset minting. Secure, efficient, and built for you.',
  keywords: [
    'DeFi',
    'Yield Farming',
    'Token Swap',
    'Staking',
    'Cryptocurrency',
    'Blockchain',
  ],
  authors: [{ name: 'Minto.uno Team' }],
  openGraph: {
    title: 'Minto.uno - Premium DeFi Platform',
    description: 'The next generation of decentralized finance.',
    url: 'https://minto.uno',
    siteName: 'Minto.uno',
    images: [
      {
        url: 'https://minto.uno/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Minto.uno',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minto.uno - Premium DeFi Platform',
    description: 'The next generation of decentralized finance.',
    images: ['https://minto.uno/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-inter">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
