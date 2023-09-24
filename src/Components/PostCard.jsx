"use client"

import Link from "next/link";

const votes = [];
export default function PostCard ({ post }){
votes[post.id] = 0

return(
    <div key={post.id} className="bg-gray-950 p-10">
        <Link href={`/Posts/${post.id}`}>
            <h3 className="text-xl font-bold mb-4">{post.id}. {post.title}</h3>
            </Link>
        
        <p className="text-slate-300">{post.body}</p>
        <p className={`votes${post.id}`}>{votes[post.id]}</p>
        <button className="bg-blue-500 hover:bg-blue-700 
        text-white font-bold py-2 px-4 rounded" onClick= {() =>{
            console.log(`You have upvoted post N°${post.id}: ${post.title} ${votes[post.id]}`)
            votes[post.id]++
            const vote = document.querySelector(`.votes${post.id}`)
            vote.textContent = votes[post.id]
        }}>
            Upvote!
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 
        text-white font-bold py-2 px-4 rounded" onClick= {() =>{
            votes[post.id]--
            console.log(`You have downvoted post N°${post.id}: ${post.title} ${votes[post.id]}`)
            const vote = document.querySelector(`.votes${post.id}`)
            vote.textContent = votes[post.id]
        }}>
            Downvote!
        </button>
    </div>
)}