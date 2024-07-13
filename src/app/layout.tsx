import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dww",
  description: "이 세상 모든 서비스들을 모아서 알잘딱깔센하게 알려드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
