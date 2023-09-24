import Link from 'next/link'
import "./navbar.css"

export default function Navbar() {
  return(
    <nav className='navbar py-5'>
      <Link href={"/"}>
        <h1 className='text-3xl'>Navbar</h1>
      </Link>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about/">
            about
          </Link>
        </li>
        <li>
          <Link href="/tienda/categorias">
            Categorias
          </Link>
        </li>
        <li>
          <Link href="/Posts/">
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  )
}