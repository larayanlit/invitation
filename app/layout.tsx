import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const dynamic = "force-static";

const invitationAllura = localFont({
  src: "../public/fonts/allura.ttf",
  variable: "--font-invitation-allura",
  display: "block",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://larayanlit.github.io/invitation"),
  title: "S ♥ M · 2 December 2026",
  description: "A joyful surprise awaits.",
  openGraph: {
    type: "website",
    url: "/",
    title: "S ♥ M · 2 December 2026",
    description: "A joyful surprise awaits.",
    images: [{ url: "/wedding-preview.png", width: 1200, height: 630, alt: "S love M · 2 December 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "S ♥ M · 2 December 2026",
    description: "A joyful surprise awaits.",
    images: ["/wedding-preview.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en">
    <body className={invitationAllura.variable}>{children}</body>
  </html>;
}
