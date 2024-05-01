import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "kaltq.com",
    template: "%s | kaltq.com",
  },
  description: "All AI services in one place.",
  openGraph: {
    title: "kaltq.com",
    description:
      "Freelancing LLM Expert, AI Researcher, and Software Developer. I am a full-stack developer with a focus on AI and Machine Learning.",
    url: "https://kaltq.com",
    siteName: "kaltq.com",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const calSans = localFont({
  src: "./fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
