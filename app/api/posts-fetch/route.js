import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export const revalidate = 0; // ปิด ISR แคช

export async function GET() {
    const posts = await prisma.post.findMany({
        where: {published: true},
        include: {
            author: {
                select: {name: true}
            }
        }
    })

    return NextResponse.json(posts, { headers: { "Cache-Control": "no-store" } })
}
