/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAddToReadingListMutation, useRemoveFromWishListMutation } from "@/redux/features/user/userApi";
import { IBook } from "@/types/global";
import { CiCircleRemove } from "react-icons/ci";
import { BiBookReader } from "react-icons/bi";
import { CiRead } from "react-icons/ci";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function WishlistCard(book: IBook) {
    const { _id, image, title, author, genre, publicationDate } = book

    const [removeFromWishList] = useRemoveFromWishListMutation();
    const [addToReadingList] = useAddToReadingListMutation();

    const handleRemoveFromWishList = async () => {
        const response: any = await removeFromWishList({ id: _id });
        if (response.error) {
            toast.error(response.error.data.errorMessages[0].message);
        } else {
            toast.success(response.data.message);
        }
    };

    const handleAddToReadingList = async () => {
        const response: any = await addToReadingList({ id: _id });
        if (response.error) {
            toast.error(response.error.data.errorMessages[0].message);
        } else {
            toast.success(response.data.message);
        }
    };

    return (
        <div className="p-4 sm:mb-0 mb-6 relative overflow-hidden border border-gray-200">
            <div className="h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={image} />
            </div>
            <h2 className="text-xl font-bold text-primary title-font mt-5">{title}</h2>
            <p className='text-[#37be4e] font-medium'>{author}</p>
            <p className="text-base leading-relaxed mt-1">{genre}</p>
            <p className="text-base leading-relaxed mt-1">Publication Date: {publicationDate}</p>
            <div className="absolute top-5 right-5">
                <CiCircleRemove
                    onClick={handleRemoveFromWishList}
                    className='text-[#37be4e] text-3xl bg-white border border-gray-200 shadow-sm mb-2 p-1 rounded' />
                <BiBookReader
                    onClick={handleAddToReadingList}
                    className='text-[#37be4e] text-3xl bg-white border border-gray-200 shadow-sm mb-2 p-1 rounded' />
                <Link to={`/book-details/${_id}`}><CiRead className='text-[#37be4e] text-3xl bg-white border border-gray-200 shadow-sm mb-2 p-1 rounded' /></Link>
            </div>
            <ToastContainer />
        </div>
    );
}
