import Navbar from "../Components/navbar"

export const metadata = {
  
  keywords: ["Tienda", "Electronica", "Computacion"],
  openGraph: {
    title: "Mi tienda online",
    description: "Landing Page",
    url: ';3',
    images: [
      {
        url: '../public/nyan-cat-kaomoji.gif',
        width: 800,
        height: 600,
      }
    ],
    locale: 'es_ARG',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Navbar></Navbar>

        {children}
      </body>
    </html>
  )
}
