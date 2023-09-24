import { NextResponse } from "next/server"

export async function GET(request, {params}){
    console.log(params)
    const {searchParams} =new URL(request.url)
    console.log(searchParams);
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + params.userid)
    const data = await res.json()
    return NextResponse.json({
        1: "Getting...",
        2: data
    })
}