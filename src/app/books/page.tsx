import { getBooks } from "@/actions/book.action";
import InventoryTable from "@/components/InventoryTable";
import { stackServerApp } from "@/stack";
import { SignIn, SignUp } from "@stackframe/stack";
import React from "react";

async function page() {
  const user = await stackServerApp.getUser();
  const books = await getBooks();

  return (
    <>
      {user ? (
        <div
          className="mt7
     max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-10 gap-6"
        >
          <div className="lg:col-span-full">
            <InventoryTable books={books} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-20 items-center">
          <SignUp />
        </div>
      )}
    </>
  );
}

export default page;
