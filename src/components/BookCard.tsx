export default function BookCard() {
    return (
        <div className="p-4 sm:mb-0 mb-6 overflow-hidden border border-gray-200">
            <div className="h-64 overflow-hidden">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" />
            </div>
            <h2 className="text-xl font-bold text-primary title-font mt-5">To Kill a Mockingbird</h2>
            <p className='text-[#37be4e] font-medium'> Harper Lee</p>
            <p className="text-base leading-relaxed mt-1">Classic Fiction</p>
            <p className="text-base leading-relaxed mt-1">Publication Date: 1960</p>
        </div>
    );
}
