import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sans = localFont({
  src: [
    {
      path: "../../public/fonts/manrope-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/manrope-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/manrope-extrabold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});
const serif = localFont({
  src: "../../public/fonts/instrument-serif-italic.ttf",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dariel Failanga — Brand Designer & Visual Artist",
  description:
    "Vibrant, meaningful design by Dariel Failanga. Explore visual identities, marketing campaigns, apparel graphics, print layouts, and digital media.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
