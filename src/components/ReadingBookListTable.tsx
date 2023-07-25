/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import { useAddToFinishedBooksMutation, useGetReadingListQuery, useRemoveFromReadingListMutation } from "@/redux/features/user/userApi";
import { IBook } from "@/types/global";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { CiBookmarkRemove } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function MyBookListTable() {
    const { data } = useGetReadingListQuery(undefined);
    const [addToFinishedReading] = useAddToFinishedBooksMutation();
    const [removeFromReadingList] = useRemoveFromReadingListMutation();
    const books = data?.data;
    const handleAddToFinishedReading = async (bookId: string) => {
        const response: any = await addToFinishedReading({ id: bookId });
        if (response.error) {
            toast.error(response.error.data.errorMessages[0].message);
        } else {
            toast.success(response.data.message);
        }
    };
    const handleRemoveFromReadingList = async (bookId: string) => {
        const response: any = await removeFromReadingList({ id: bookId });
        if (response.error) {
            toast.error(response.error.data.errorMessages[0].message);
        } else {
            toast.success(response.data.message);
        }
    };

    return (
        <>
            <Table>
                {books?.length ? (
                    <TableCaption className="mb-8">A list of your recent marked books.</TableCaption>
                ) : (
                    <TableCaption className="mb-8">No Book in your reading list...</TableCaption>
                )}
                <TableHeader>
                    <TableRow className="text-gray-900 font-bold">
                        <TableHead className="w-[300px]">Book Name</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Genre</TableHead>
                        <TableHead>Publication year</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="w-full">

                    {books?.map((book: IBook) => (
                        <TableRow key={book._id}>
                            <TableCell className="font-medium">{book.title}</TableCell>
                            <TableCell>{book.author}</TableCell>
                            <TableCell>{book.genre}</TableCell>
                            <TableCell>{book.publicationDate}</TableCell>
                            <TableCell className="flex justify-center items-center">
                                <BsFillBookmarkCheckFill onClick={() => handleAddToFinishedReading(book._id)} className="text-xl text-[#37be4e]" />
                                <CiBookmarkRemove onClick={() => handleRemoveFromReadingList(book._id)} className="text-2xl text-[#37be4e]" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <ToastContainer />
            </Table >
        </>

    );
}
