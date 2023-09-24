import Navbar from "@/Components/Navbar"
import { Roboto } from "next/font/google"
import "./globals.css"
export const metadata = {
  
  keywords: ["Tienda", "Electronica", "Computacion"],
  openGraph: {
    title: "Mi tienda online",
    description: "Landing Page",
    url: '/',
    images: [
      {
        url: '#',
        width: 800,
        height: 600,
      }
    ],
    locale: 'es_ARG',
    type: 'website',
  },
}

const roboto = Roboto({
  display: "swap",
  weight: "400",
  styles: ["italic", "normal"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>

        {children}
      </body>
    </html>
  )
}
