import BookReview from "@/components/BookReview";
import { Button } from "@/components/ui/button";
import Navbar from "@/layouts/Navbar";
import { Link } from "react-router-dom";

export default function BookDetails() {
  return (
    <>
      <Navbar />

      <div className="pt-28 pb-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://m.media-amazon.com/images/I/71HbYElfY0L._AC_UF1000,1000_QL80_.jpg" alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h2 className="text-xl font-bold text-primary title-font mt-5">To Kill a Mockingbird</h2>
            <p className='text-[#37be4e] font-medium'> Harper Lee</p>
            <p className="text-base leading-relaxed mt-1">Classic Fiction</p>
            <p className="text-base leading-relaxed mt-1">Publication Date: 1960</p>
            <div className="flex mt-2">
              <Button className="bg-[#37be4e] uppercase text-sm font-semibold w-24 h-9 rounded-md px-3 mr-2">
                <Link to="/edit-book">Edit</Link>
              </Button>
              <Button className="bg-[#37be4e] uppercase text-sm font-semibold w-24 h-9 rounded-md px-3">Delete </Button>
            </div>
          </div>
        </div>
      </div >
      <BookReview />
    </>
  )
}

