"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Combobox } from "./ui/combo-box";
import { useState } from "react";
import { getBooks } from "@/actions/book.action";
import { useRouter } from "next/navigation";

// Tambahkan tipe Book agar eksplisit
type Book = {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: string;
};

type BookData = {
  userBooks: Book[];
};

interface InventoryTableProps {
  books: BookData;
}

export default function InventoryTable({ books }: InventoryTableProps) {
  const router = useRouter();
  const [selectCategory, setSelectCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books?.userBooks?.filter((book) => {
    const matchesSearch = book.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectCategory === "" || book.category === selectCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 py-4">
        <div className="relative max-w-sm w-full">
          <Input
            placeholder="Filter Books..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute h-4 w-4 left-3 top-1/2 transform -translate-y-1/2" />
        </div>
        <Combobox value={selectCategory} onChange={setSelectCategory} />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Books ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredBooks?.map((book) => {
            const slugifiedName = book.name
              .toLocaleLowerCase()
              .replace(/\s+/g, "-");
            const slug = `${book.id}--${slugifiedName}`;
            const bookUrl = `/books/${slug}`;

            return (
              <TableRow key={book.id} onClick={() => router.push(bookUrl)}>
                <TableCell>{book.id}</TableCell>
                <TableCell>{book.name}</TableCell>
                <TableCell>{book.category}</TableCell>
                <TableCell>{book.price}</TableCell>
                <TableCell className="text-right">{book.stock}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-4">
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter />
      </Table>
    </div>
  );
}
