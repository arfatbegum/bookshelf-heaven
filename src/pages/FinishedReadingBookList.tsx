import { FinishedReadingBookListTable } from "@/components/FinishedReadingBookListTable"
import Navbar from "@/layouts/Navbar"


export default function FinishedReadingBookList() {
    return (
        <>
            <Navbar />
            <div className="py-20 max-w-7xl mx-auto">
                <h1 className="text-xl font-black text-primary uppercase mb-4" >
                    My Finished Reading Booklist
                </h1>
                <div className="shadow-md border border-gray-200 rounded">
                    <FinishedReadingBookListTable />
                </div>
            </div>
        </>
    )
}

