import { Inter } from "next/font/google";
import "./global.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "seo homepage",
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    videos: [
      {
        url: "https://nextjs.org/video.mp4", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Next.js" />
        <meta
          property="og:description"
          content="The React Framework for the Web"
        />
        <meta property="og:url" content="https://nextjs.org/" />
        <meta property="og:site_name" content="Next.js" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:url" content="https://nextjs.org/og.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:url" content="https://nextjs.org/og-alt.png" />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="1600" />
        <meta property="og:image:alt" content="My custom alt" />
        <meta property="og:type" content="website" />
      </Head>
      <body className={inter.className}> {children} </body>
    </html>
  );
}
