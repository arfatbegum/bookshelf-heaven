import EditBookForm from "@/components/EditBookForm";
import Navbar from "@/layouts/Navbar";

export default function EditBook() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto">
        <EditBookForm />
        <img src="https://media.istockphoto.com/id/507876702/vector/cute-girl-in-pink-is-sitting-and-reading-a-book.jpg?s=612x612&w=0&k=20&c=g27LKHgByWKzAFcb4gHHnrteel2ZSnIpTDmyfqcx0L8=" />
      </div>
    </>
  )
}

