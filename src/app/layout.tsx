import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProviderTheme } from "@/components/theme/provider";
import ReduxProvider from "@/redux/redux-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Front End Mentor | Single Product Page | Abdalla Emad",
  description: "This is an excercise from AbdallaEmad",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased light`}>
        <ReduxProvider>
          <ProviderTheme>
            {children}
          </ProviderTheme>
        </ReduxProvider>
      </body>
    </html >
  );
}
