import Navbar from "@/components/Navbar";
import { Google_Sans } from "next/font/google";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${googleSans.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
