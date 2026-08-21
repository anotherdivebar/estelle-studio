import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "http";
  const baseUrl = new URL(`${protocol}://${host}`);

  return {
    metadataBase: baseUrl,
    title: "J. Peavey — Session Drummer & Producer",
    description:
      "Session drumming, production, and touring with J. Peavey. Character-rich drums, thoughtful arrangements, and a song-first approach.",
    openGraph: {
      title: "J. Peavey — Built for the take that stays.",
      description: "Session drummer. Producer. Touring musician.",
      type: "website",
      images: [
        {
          url: new URL("/og.png", baseUrl),
          width: 1200,
          height: 630,
          alt: "J. Peavey — Built for the take that stays.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "J. Peavey — Built for the take that stays.",
      description: "Session drummer. Producer. Touring musician.",
      images: [new URL("/og.png", baseUrl)],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
