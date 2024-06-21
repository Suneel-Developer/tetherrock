import "./globals.css";


export const metadata = {
  title: "Tetherrock",
  description: "Tetherrock",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
