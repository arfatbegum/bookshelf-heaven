import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { BsFillBookmarkStarFill, BsFillBookmarkCheckFill } from "react-icons/bs";

export function MyBookListTable() {
    return (
        <Table>
            <TableCaption className="mb-8">A list of your recent marked books.</TableCaption>
            <TableHeader>
                <TableRow className="text-gray-900 font-bold">
                    <TableHead className="w-[300px]">Book Name</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Genre</TableHead>
                    <TableHead>Publication year</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">To Kill a Mockingbird</TableCell>
                    <TableCell>Harper Lee</TableCell>
                    <TableCell>Classic Fiction</TableCell>
                    <TableCell>1960</TableCell>
                    <TableCell>
                        <BsFillBookmarkStarFill className="text-xl text-[#37be4e]" />
                        <BsFillBookmarkCheckFill className="text-xl text-[#37be4e] hidden" />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>

    );
}
