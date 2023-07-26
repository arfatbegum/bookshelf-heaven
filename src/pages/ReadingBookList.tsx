import { ReadingBookListTable } from "@/components/ReadingBookListTable";

export default function MyBooklist() {
    return (
        <div className="py-8 max-w-7xl mx-auto">
            <h1 className="text-xl font-black text-primary uppercase mb-4" >
                My Reading Booklist
            </h1>
            <div className="shadow-md border border-gray-200 rounded">
                <ReadingBookListTable />
            </div>
        </div>
    )
}

