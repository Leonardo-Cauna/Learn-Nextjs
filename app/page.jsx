import Users from "../Components/Users"
import LoadPages from "./Posts/page"

export default function HomePage(){
    return (
    <section>
        <h1>Hello World</h1>
        <button>click</button>
        <Users/>
        <LoadPages/>
    </section> 
    )
}