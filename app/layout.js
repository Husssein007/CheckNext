import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav   
        style={{
          width:"100%",
          background:"teal",
          fontSize:"50px",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}>
          <Link style={{margin:"20px"}} href='/'>Home</Link>
          <Link style={{margin:"20px"}} href='/posts'>Posts</Link>
          <Link style={{margin:"20px"}} href='/articles'>Articles</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
