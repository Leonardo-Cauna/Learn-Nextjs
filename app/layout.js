import Navbar from "../Components/navbar"

export const metadata = {
  
  keywords: ["Tienda", "Electronica", "Computacion"],
  openGraph: {
    title: "Mi tienda online",
    description: "Landing Page",
    url: ';3',
    images: [
      {
        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fview%2Fnyan-cat-kaomoji-aidnjp-emoji-japanese-gif-23310320&psig=AOvVaw3j5BFEPnbtKEH_W95gHKs8&ust=1694057948652000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJiL2uOHlYEDFQAAAAAdAAAAABAI',
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
