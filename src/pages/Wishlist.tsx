import BookCard from "@/components/BookCard";
import Navbar from "@/layouts/Navbar";

export default function Wishlist() {
  return (
    <>
      <Navbar />
      <div className="py-20 max-w-7xl mx-auto">
        <h1 className="text-xl font-black text-primary uppercase mb-4" >
          Wishlist
        </h1>
        <div className="grid grid-cols-5 gap-4">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </div>
    </>
  )
}

