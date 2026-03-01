import type {Metadata} from 'next';
import { Inter, JetBrains_Mono, Oswald } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-condensed',
});

export const metadata: Metadata = {
  title: 'Global Conflict Monitor',
  description: 'Structured data intelligence dashboard for monitoring global conflicts and escalation events.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${oswald.variable}`}>
      <body suppressHydrationWarning className="bg-[#0A0A0A] text-white font-sans antialiased overflow-hidden selection:bg-[#FF3B30] selection:text-white">
        {children}
      </body>
    </html>
  );
}
