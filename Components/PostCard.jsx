"use client"

export default function PostCard ({ post }){
return(
<div key={post.id}>
    <h3>{post.id}. {post.title}</h3>
    <p>{post.body}</p>
    <button onClick= {() =>{
        alert(`You have upvoted post N°${post.id}: ${post.title}`)
    }}>
        Upvote!
    </button>
    <button onClick= {() =>{
        alert(`You have downvoted post N°${post.id}: ${post.title}`)
    }}>
        Downvote!
    </button>
</div>
)}