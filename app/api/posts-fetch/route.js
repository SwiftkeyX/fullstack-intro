import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
    const posts = await prisma.post.findMany({
        where: {published: true},
        include: {
            author: {
                select: {name: true}
            }
        }
    })

    return NextResponse.json(posts)
}