import WishlistCard from "@/components/WishlistCard";
import Navbar from "@/layouts/Navbar";
import { useGetWishlistQuery } from "@/redux/features/user/userApi";
import { IBook } from "@/types/global";

export default function Wishlist() {
  const { data } = useGetWishlistQuery(undefined);
  const books = data?.data;

  return (
    <>
      <Navbar />
      <div className="py-20 max-w-7xl mx-auto">
        <h1 className="text-xl font-black text-primary uppercase mb-4" >
          Wishlist
        </h1>
        {books?.length ? (
          <div className="grid grid-cols-5 gap-4">
            {books?.map((book: IBook) => (
              <WishlistCard key={book._id} {...book} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-screen">
            <h4>No Book in your wishlist...</h4>
          </div>
        )}
      </div>
    </>
  )
}

