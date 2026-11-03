import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dariel Failanga | Graphic Designer",
  description: "Dariel Failanga — graphic designer specializing in marketing designs, brand identity, and layouts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
