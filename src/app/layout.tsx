import { ReactNode } from "react";

import type { Metadata } from "next";

import "@/styles/colors.css";
import "@/styles/typography.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "Codective Demos",
  description: "Demos that illustrate the content of Codective Docs",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
