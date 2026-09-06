import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gunsan.com"),
  title: "군산.com | 그대로 따라가는 군산 여행코스",
  description:
    "관광지부터 맛집·카페·놀거리까지, 군산에서 가야 할 곳을 실제 여행 동선으로 이어드립니다.",
  openGraph: {
    title: "군산.com | 그대로 따라가는 군산 여행코스",
    description: "오늘 군산, 어떻게 여행할까요? 관광지부터 맛집·카페까지 하나의 코스로 이어드립니다.",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "오늘 군산, 어떻게 여행할까요?" }],
    locale: "ko_KR",
    siteName: "군산.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "군산.com | 그대로 따라가는 군산 여행코스",
    description: "관광지부터 맛집·카페까지, 하나의 코스로.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
