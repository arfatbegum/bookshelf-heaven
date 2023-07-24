import { IBook } from "@/types/global";
import { Heart } from "lucide-react";

export default function BookCard(book: IBook) {
    const { image, title, author, genre, publicationDate } = book
    return (
        <div className="p-4 sm:mb-0 mb-6 overflow-hidden border border-gray-200">
            <div className="h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src={image} />
            </div>
            <h2 className="text-xl font-bold text-primary title-font mt-5">{title}</h2>
            <p className='text-[#37be4e] font-medium'>{author}</p>
            <p className="text-base leading-relaxed mt-1">{genre}</p>
            <div className="flex justify-between items-center">
                <p className="text-base leading-relaxed mt-1">Publication Date: {publicationDate}</p>
                <Heart className='text-[#37be4e]' />
            </div>
        </div>
    );
}
