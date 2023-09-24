import { NextResponse } from "next/server"

export async function GET(){

    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return NextResponse.json({
        1: "Getting...",
        2: data
    })
}

export async function POST(request){
    const {name, surname, email} = await request.json()
    console.log(name, surname, email, process.env.SecretKey);
    return NextResponse.json({
        1: "Posting..."
    })
}

export function PUT(){
    return NextResponse.json({
        1: "Puting..."
    })
}

export function DELETE(){
    return NextResponse.json({
        1: "Deleting..."
    })
}

