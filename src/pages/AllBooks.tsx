import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import Navbar from "@/layouts/Navbar";
import { SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function AllBooks() {
  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center max-w-7xl mx-auto pt-16">
        <div className="w-full h-9 flex justify-between bg-[#37be4e] rounded-md mr-2">
          <div className="w-1/8 flex items-center px-4 bg-gray-100 rounded-md mx-2 my-1.5">
            <SearchIcon className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 w-full bg-transparent focus:outline-none"
            />
          </div >
          <div className="flex items-center px-4">
            <p className="uppercase text-sm font-semibold mr-2 text-white">
              Filter By:
            </p>
            <select
              name=""
              defaultValue={"manula"}
              className="text-gray-700 outline-none m-1 text-sm p-1 bg-gray-100 rounded-md"
              id=""
            >
              <option value="manual">Genre</option>
              <option value="publication-year">Publication Year</option>
            </select>
          </div>
        </div >
        <Button className="bg-[#37be4e] uppercase text-sm font-semibold w-24 h-9 rounded-md px-3">
          <Link to="/add-book">Add New</Link>
        </Button>
      </div >
      <div className="py-10 max-w-7xl mx-auto">
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

