import PostCard from "@/Components/PostCard";
import "./post.css"
async function LoadPages () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    await new Promise((resolve) => setTimeout(resolve, 500))
    return data;
}

async function PostPages(){
    const posts = await LoadPages();
    console.log(posts);

    return(
        <div className="grid">
            {posts.map((post) => (
                <PostCard post={post} key={post.id}/>
            ))}
        </div>
    );
}

export default PostPages;