import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hexel Studio - Transforming AI Solutions",
  description:
    "Hexel Studio empowers businesses with cutting-edge AI and machine learning solutions, including Pixel Forge, Tensor Insight, and Agent Workbench. Discover how we transform data into dynamic solutions.",
  icons: {
    icon: "/icon.ico",
  },
  keywords: [
    "Hexel Studio",
    "AI solutions",
    "machine learning",
    "Pixel Forge",
    "Tensor Insight",
    "Agent Workbench",
    "data transformation",
    "AI studio",
    "advanced AI tools",
  ],
  authors: [{ name: "Hexel Studio Team", url: "https://hexelstudio.com" }],
  applicationName: "Hexel Studio",
  openGraph: {
    title: "Hexel Studio - Transforming AI Solutions",
    description:
      "Empowering businesses with cutting-edge AI and machine learning solutions.",
    url: "https://hexelstudio.com",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hexelstudio.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
