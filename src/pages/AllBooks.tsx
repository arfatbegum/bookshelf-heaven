/* eslint-disable @typescript-eslint/no-explicit-any */
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import Navbar from "@/layouts/Navbar";
import Loader from "@/components/Loader";
import { useGetBooksQuery } from "@/redux/features/book/bookSlice";
import { IBook } from "@/types/global";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AllBooks() {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const Books = data?.data;

  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPublicationDate, setSelectedPublicationDate] = useState('');
  const [filteredGenres, setFilteredGenres] = useState<IBook[]>(Books || []);
  const [filteredPublicationDates, setFilteredPublicationDates] = useState<
    string[]
  >([]);
  const [selectedFilterType, setSelectedFilterType] = useState('manual');

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const storedAuthData = localStorage.getItem('auth');
  const token = storedAuthData ? JSON.parse(storedAuthData).token : null;

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    navigate(`/search/${encodeURIComponent(searchTerm)}`);
  };


  const genres: string[] = Books?.map((book: IBook) => book.genre) || [];

  const extractYearFromDate = (date: string) => {
    return new Date(date).getFullYear().toString();
  };

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
    setSelectedPublicationDate('');
  };

  const handlePublicationDateChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedPublicationDate(event.target.value);
  };

  useEffect(() => {
    const filteredBooks = selectedGenre
      ? Books?.filter((book: IBook) => book.genre === selectedGenre) || []
      : Books || [];

    setFilteredGenres(filteredBooks);

    const publicationYears: any = [
      ...new Set(
        filteredBooks.map((book: IBook) =>
          extractYearFromDate(book.publicationDate)
        )
      ),
    ];

    setFilteredPublicationDates(publicationYears);
  }, [selectedGenre, Books]);

  const handleFilterTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedFilterType(event.target.value);
    setSelectedGenre('');
    setSelectedPublicationDate('');
  };

  const filteredBooks =
    selectedFilterType === 'manual'
      ? selectedGenre
        ? filteredGenres.filter((book: IBook) => book.genre === selectedGenre)
        : filteredGenres
      : selectedPublicationDate
        ? filteredGenres.filter(
          (book: IBook) =>
            extractYearFromDate(book.publicationDate) ===
            selectedPublicationDate
        )
        : filteredGenres;

  return (
    <>
      <Navbar />
      {isLoading ? (
        <div className="flex justify-center h-[100vh]">
          <Loader />
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center max-w-7xl mx-auto pt-16">
            <div className="w-full h-9 flex justify-between bg-[#37be4e] rounded-md mr-2">
              <div className="w-1/8 flex items-center px-4 bg-gray-100 rounded-md mx-2 my-1.5">
                <SearchIcon className="w-4 h-4 text-gray-500" />
                <form onSubmit={onSubmitHandler}>
                  <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="ml-2 w-full bg-transparent focus:outline-none"
                  />
                </form>
              </div >
              <div className="flex items-center px-4">
                <p className="uppercase text-sm font-semibold mr-2 text-white">
                  Filter By:
                </p>
                <select
                  name=""
                  value={selectedFilterType}
                  onChange={handleFilterTypeChange}
                  className="text-gray-700 outline-none m-1 text-sm p-1 bg-gray-100 rounded-md"
                >
                  <option value="manual">Genre</option>
                  <option value="publication-year">Publication Year</option>
                </select>
                {selectedFilterType === 'manual' ? (
                  <select
                    name=""
                    value={selectedGenre}
                    onChange={handleGenreChange}
                    className="w-28 text-gray-700 outline-none m-1 text-sm p-1 bg-gray-100 rounded-md"
                  >
                    {genres.map((genre, index) => (
                      <option key={index} value={genre}>
                        {genre}
                      </option>
                    ))}
                  </select>
                ) : (
                  <select
                    name=""
                    value={selectedPublicationDate}
                    onChange={handlePublicationDateChange}
                    className="w-28 text-gray-700 outline-none m-1 text-sm p-1 bg-gray-100 rounded-md"
                  >
                    {filteredPublicationDates.map((date: string, index) => (
                      <option key={index} value={date}>
                        {date}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div >
            {token &&
              <Button className="bg-[#37be4e] uppercase text-sm font-semibold w-24 h-9 rounded-md px-3">
                <Link to="/add-book">Add New</Link>
              </Button>
            }
          </div >
          <div className="py-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-5 gap-4">
              {filteredBooks.map((book: IBook) => (
                <BookCard key={book._id} {...book} />
              ))}
            </div>
          </div>
        </>
      )};
    </>
  )
}

