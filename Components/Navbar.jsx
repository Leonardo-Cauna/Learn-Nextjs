import Link from 'next/link'
import "./navbar.css"

export default function Navbar() {
<<<<<<< HEAD:Components/navbar.jsx
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
          <Link href="/tienda/">
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
=======
    return(<nav>
          <h1>Navbar</h1>

          <ul>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/tienda/">
                about
              </Link>
            </li>
            <li>
              <Link href="/tienda/categorias">
                Categorias
              </Link>
            </li>
          </ul>
        </nav>
        )
}
>>>>>>> fcdfe265520700e1bc51615f22958ff3f807645a:Components/Navbar.jsx
