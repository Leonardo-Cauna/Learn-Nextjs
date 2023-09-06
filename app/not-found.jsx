import Link from "next/link"
export default function notFound (){;
    return(
        <section>
            <h1>ERROR 404</h1>
            <p>Pagina no encontrada</p>
            <Link href="/">Volver al landing page</Link>
        </section>
    )
}