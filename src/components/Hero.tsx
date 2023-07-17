import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <>
            <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
                <div>
                    <h1 className="text-6xl font-black mb-2 text-[#37be4e]">
                        WELCOME TO THE
                    </h1>
                    <p className="text-6xl font-black mb-2 text-primary">BOOKSHELF HEAVEN</p>
                    <p className="text-secondary font-semibold text-xl">
                        Step closer and allow the words to beckon you into their magical embrace.
                    </p>
                    <div className="text-primary mt-16">
                        <p>Come, dear reader, and lose yourself in the magic</p>
                        <p>And wonder that awaits within the BOOKSHELF HEAVEN</p>
                    </div>
                    <Button className="mt-5 bg-[#37be4e] uppercase"> <Link to="/all-books">Brows all Books</Link></Button>
                </div>
                <div className="w-1/2 relative -right-14">
                    <img src="https://pbs.twimg.com/media/DiFppRfW0AEVYdG.png" alt="" />
                </div>
            </div>
        </>
    );
}