import prisma from "@/lib/prisma";
import { NextResponse } from "next/server"

export const revalidate = 0; // ปิด ISR แคช

export async function POST(request) {
    const res = await request.json()
    const {title, content} = res;


    const result = await prisma.post.create({
        data: {
            title,
            content,
            published: true,
            author: {create: {
                name:"ryan"
            }}
        }
    })

    return NextResponse.json(result, { headers: { "Cache-Control": "no-store" } })
}