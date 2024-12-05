import './globals.css';

export const metadata = {
  title: 'Multilingual Website',
  description: 'A website with i18n support',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ru' >
      <body>
        {children}
      </body>
    </html>
  );
}
