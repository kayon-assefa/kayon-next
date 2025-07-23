import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'kayon tech test Dashboard',
  description: 'test dashbourd of Kayon Tech, built with App Router.',
  metadataBase: new URL('https://kayontech.pro.et'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}