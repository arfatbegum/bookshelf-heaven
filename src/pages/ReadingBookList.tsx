import { MyBookListTable } from "@/components/ReadingBookListTable";
import Navbar from "@/layouts/Navbar";

export default function MyBooklist() {
    return (
        <>
            <Navbar />
            <div className="py-20 max-w-7xl mx-auto">
                <h1 className="text-xl font-black text-primary uppercase mb-4" >
                    My Reading Booklist
                </h1>
                <div className="shadow-md border border-gray-200 rounded">
                    <MyBookListTable />
                </div>
            </div>
        </>
    )
}

