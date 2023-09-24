"use client"
import { useParams } from "next/navigation";
export default function UserPage (){
    const Params = useParams()
    console.log(Params);
return(
<div>
    <button onClick={() =>{
        console.log("Agh, you clicked me!");
    }}> Button </button>
</div>
)}