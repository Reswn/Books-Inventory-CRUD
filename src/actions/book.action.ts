"use server";

import { prisma } from "@/lib/prisma";
import { getUserId } from "./user.action";
import { FunctionSquareIcon } from "lucide-react";
// import { revalidatePath } from "next/cache"; // Opsional jika kamu pakai ISR/dynamic rendering

export async function getBooks(searchTerm?: string) {
  try {
    const currentUserId = await getUserId();

    const whereClause: any = {
      userId: currentUserId,
    };

    if (searchTerm) {
      whereClause.name = {
        contains: searchTerm,
        mode: "insensitive",
      };
    }

    const userBooks = await prisma.book.findMany({
      // ✅ PAKAI huruf kecil
      where: whereClause,
    });

    // revalidatePath("/"); // hanya pakai jika bukan di RSC
    return { success: true, userBooks };
  } catch (error) {
    console.error("Error in getBooks", error);
    throw new Error("Failed to Fetch Books");
  }
}

export async function getBookById(id: string) {
  //Example using pramas

  return await prisma.book.findUnique({
    where: { id },
  });
}
