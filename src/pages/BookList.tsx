// BookList.tsx
import React from "react";
import BookCard from "@/components/BookCard";
import { IBook } from "@/types/global";

interface Props {
  books: IBook[];
}

const BookList: React.FC<Props> = ({ books }) => {
  return (
    <div className="py-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-5 gap-4">
        {books.map((book: IBook) => (
          <BookCard key={book._id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
