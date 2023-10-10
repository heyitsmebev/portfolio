import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script src="/assets/particles.js"></Script>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
        ></script>
      </body>
    </html>
  );
}
