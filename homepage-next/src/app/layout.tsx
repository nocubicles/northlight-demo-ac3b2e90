import type { Metadata } from 'next';
import { Inter, DM_Sans, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/css/style.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://integrated.ee'),
  title: {
    default: 'integrated.ee — Business Central Partner in Estonia',
    template: '%s — integrated.ee',
  },
  description: 'Business Central expertise with a senior team and AI-powered delivery. Implementations, customizations, integrations, and support.',
  openGraph: {
    type: 'website',
    siteName: 'integrated.ee',
    images: ['/assets/logo.png'],
  },
  twitter: {
    card: 'summary',
  },
  icons: {
    icon: [
      { url: '/assets/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/assets/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'integrated.ee',
              url: 'https://integrated.ee',
              logo: 'https://integrated.ee/assets/logo.png',
              description: 'Senior Business Central team. AI-powered delivery. Estonian-based BC partner for implementations, customizations, integrations, and support.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Tallinn',
                addressCountry: 'EE',
              },
              email: 'villem@integrated.ee',
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
