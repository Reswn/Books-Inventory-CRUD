import React from "react";
import BookCard from "./BookCard";
import { getBookById } from "@/actions/book.action";
import { SignIn } from "@stackframe/stack";
import { stackServerApp } from "@/stack";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const [id] = params.slug.split("--");
  const book = await getBookById(id);
  return {
    title: book ? book.name : "Book Details",
    description: book?.description ?? "Book details",
  };
}

async function Page({ params }: { params: { slug: string } }) {
  const user = await stackServerApp.getUser();
  const [id] = params.slug.split("--");
  const book = await getBookById(id);

  if (!user) return <SignIn />;

  if (!book) {
    return (
      <div className="text-center text-muted-foreground py-12">
        Book not found.
      </div>
    );
  }

  return (
    <div className="mt-7 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-full">
        <BookCard book={book} />
      </div>
    </div>
  );
}

export default Page;
