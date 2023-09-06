import PostCard from "@/Components/PostCard";

async function LoadPages () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}

async function PostPages(){
    const posts = await LoadPages();
    console.log(posts);

    return(
        <div>
            {posts.map((post) => (
                <PostCard post={post} key={post.id}/>
            ))}
        </div>
    );
}

export default PostPages;