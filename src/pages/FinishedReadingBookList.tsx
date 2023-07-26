import { FinishedReadingBookListTable } from "@/components/FinishedReadingBookListTable"

export default function FinishedReadingBookList() {
    return (
        <>
            <div className="py-8 max-w-7xl mx-auto">
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

