import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

export default function RecentBooks() {
  return (
    <div className="h-[calc(100vh-80px)] max-w-7xl mx-auto">
      <h1 className="text-xl font-black text-primary uppercase mt-10" >
        Recently Added
      </h1>
      <div>
        <div className="py-10">
          <div className="grid grid-cols-5 gap-4">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
      </div>
      <Button className="bg-[#37be4e] uppercase">
        <Link to="/all-books">Brows all Books</Link>
      </Button>
    </div >
  );
}
