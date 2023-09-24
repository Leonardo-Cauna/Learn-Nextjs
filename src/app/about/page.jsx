"use client"
import {useRouter, useParams} from "next/navigation"


export default function HomePage(){
    const router = useRouter()
    return (
        <section>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odio amet quia a aliquam alias ullam nulla aperiam, magni esse ut labore laudantium quaerat cupiditate cumque explicabo impedit quidem ea non optio placeat! Assumenda ex voluptatum, vitae consequuntur consectetur facere exercitationem, ullam tempora neque ea mollitia. Inventore dolorum similique magnam.</p>

            <button className="bg-sky-400 px-3 py-2 rounded-md" onClick={() =>{
                router.push("/Posts/" + 4)
            }}> Seguir</button>
        </section>
    )
}