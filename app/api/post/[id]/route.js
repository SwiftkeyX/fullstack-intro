import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const revalidate = 0; // ปิด ISR แคช

export async function DELETE(request, {params}) {
    const id = params.id;

    const post = await prisma.post.delete({
        where: {id}
    })

    return NextResponse.json(post, { headers: { "Cache-Control": "no-store" } })
}