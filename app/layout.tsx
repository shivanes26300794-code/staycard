import "./globals.css";
import type { Metadata } from "next";

// A Server Component can export metadata — a Client Component cannot.
export const metadata: Metadata = {
  title:   "StaySpot",
  description: "Find and book unique stays - cozy cabins, beach houses, and city apartments.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header"> 
          {/* This small logo lives in /public and is fine as a plain <img>. The LARGE
              stay photos in StayCard and 
              the detail page are the ones to optimise. */}
          <span>
            <img src="/logo.svg" alt="StaySpot logo" width={26} height={26} />
          </span>
          <span>StaySpot</span>
        </header>
          
          
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
