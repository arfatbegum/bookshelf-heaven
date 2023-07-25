/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useGetBooksQuery } from '@/redux/features/book/bookSlice';
import { IBook } from '@/types/global';
import Loader from '@/components/Loader';
import BookCard from './BookCard';

export default function RecentBooks() {
  const { data, isLoading } = useGetBooksQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  const validData: IBook[] = data?.data?.filter((item: IBook) => item.createdAt) || [];
  const sortedBooks: IBook[] = validData.slice().sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
  const Books: IBook[] = sortedBooks.slice(0, 10);

  return (
    <div className="h-[calc(100vh-80px)] max-w-7xl mx-auto">
      <h1 className="text-xl font-black text-primary uppercase mt-10">
        Recently Added
      </h1>
      <div className="py-10">
        <div className="grid grid-cols-5 gap-4">
          {Books.map((book: IBook) => (
            <BookCard key={book._id} {...book} />
          ))}
        </div>
      </div>
      <Button className="bg-[#37be4e] uppercase">
        <Link to="/all-books">Browse all Books</Link>
      </Button>
    </div>
  );
}
