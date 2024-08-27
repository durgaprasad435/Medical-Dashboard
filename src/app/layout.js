// app/layout.tsx
import { Providers } from "../app/provider";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
