import Navbar from "../Components/navbar"

export const metadata = {
  
  keywords: ["Tienda", "Electronica", "Computacion"],
  openGraph: {
    title: "Mi tienda online",
    description: "Landing Page",
    url: ';3',
    images: [
      {
        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.redbubble.com%2Fes%2Fi%2Fpegatina%2Fkaomoji-ascii-gato-varita-m%25C3%25A1gica-brilla-de-fragmentals%2F138147289.EJUG5&psig=AOvVaw3eUdlOaUWnN4Ay2gwgi08Q&ust=1694058312077000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjZ-5CJlYEDFQAAAAAdAAAAABAR',
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
