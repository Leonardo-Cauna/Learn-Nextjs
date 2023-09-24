import PostPages from "../page"
import { Suspense } from "react"

async function loadPost (id){
const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
const post = await res.json()
return post
}

async function Page({ params }){
const id = params.postid
    const post = await loadPost(id)
return(
<div>
    <hr />
    <h1>{post.id}. {post.title}</h1>
    <p>{post.body}</p>
    <hr />
    <h3>otras publicaciones</h3>
    <Suspense fallback= {<div>El resto de posts se estan cargando...</div>}>
        <PostPages />
    </Suspense>
</div>
)}

export default Page