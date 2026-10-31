import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "군산닷컴 | 관광생생통",
  description: "직접 다녀온 진짜 군산의 이야기. 군산닷컴 관광생생통.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
