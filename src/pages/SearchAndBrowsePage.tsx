import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookCoverCard from '@/components/BookCoverCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from 'lucide-react';

// Mock data for the book grid, matching the interface expected by BookCoverCard
const mockBooks = [
  { id: '1', title: 'The Shadow of the Wind', author: 'Carlos Ruiz Zafón', coverImageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=300&auto=format&fit=crop', isOwned: false },
  { id: '2', title: 'Mistborn: The Final Empire', author: 'Brandon Sanderson', coverImageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=300&auto=format&fit=crop', isOwned: true },
  { id: '3', title: 'Dune', author: 'Frank Herbert', coverImageUrl: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=300&auto=format&fit=crop', isOwned: false },
  { id: '4', title: 'A Game of Thrones', author: 'George R.R. Martin', coverImageUrl: 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=300&auto=format&fit=crop', isOwned: true },
  { id: '5', title: 'The Name of the Wind', author: 'Patrick Rothfuss', coverImageUrl: 'https://images.unsplash.com/photo-1543002588-b9b6db022934?q=80&w=300&auto=format&fit=crop', isOwned: false },
  { id: '6', title: 'Circe', author: 'Madeline Miller', coverImageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=300&auto=format&fit=crop', isOwned: false },
  { id: '7', title: 'Project Hail Mary', author: 'Andy Weir', coverImageUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=300&auto=format&fit=crop', isOwned: true },
  { id: '8', title: 'The Night Circus', author: 'Erin Morgenstern', coverImageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=300&auto=format&fit=crop', isOwned: false },
  { id: '9', title: 'Six of Crows', author: 'Leigh Bardugo', coverImageUrl: 'https://images.unsplash.com/photo-1524995767965-a24a689f5c3d?q=80&w=300&auto=format&fit=crop', isOwned: false },
  { id: '10', title: 'Recursion', author: 'Blake Crouch', coverImageUrl: 'https://images.unsplash.com/photo-1491841550275-5b462bf483cc?q=80&w=300&auto=format&fit=crop', isOwned: false },
  { id: '11', title: 'Anxious People', author: 'Fredrik Backman', coverImageUrl: 'https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=300&auto=format&fit=crop', isOwned: true },
  { id: '12', title: 'The Vanishing Half', author: 'Brit Bennett', coverImageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=300&auto=format&fit=crop', isOwned: false },
];

const SearchAndBrowsePage = () => {
  console.log('SearchAndBrowsePage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <section aria-labelledby="search-and-filter-heading">
          <h1 id="search-and-filter-heading" className="text-3xl md:text-4xl font-serif font-bold text-amber-50 mb-2">
            Explore the Collection
          </h1>
          <p className="text-slate-400 mb-8">
            Find your next great read from our curated collection of books.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search by title, author, or genre..."
                className="w-full pl-10 h-12 bg-slate-800 border-slate-700 focus:ring-amber-400 text-white"
              />
            </div>
            <Select defaultValue="relevance">
              <SelectTrigger className="w-full sm:w-[180px] h-12 bg-slate-800 border-slate-700 focus:ring-amber-400 text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700 text-white">
                <SelectItem value="relevance">Sort by: Relevance</SelectItem>
                <SelectItem value="title-asc">Sort by: Title A-Z</SelectItem>
                <SelectItem value="title-desc">Sort by: Title Z-A</SelectItem>
                <SelectItem value="newest">Sort by: Newest</SelectItem>
              </SelectContent>
            </Select>
            <Button className="h-12 bg-amber-600 hover:bg-amber-700 text-white font-semibold">
              Search
            </Button>
          </div>
        </section>

        <section aria-labelledby="search-results-heading">
          <h2 id="search-results-heading" className="sr-only">Search Results</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {mockBooks.map((book) => (
              <BookCoverCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        <section className="mt-12" aria-label="Pagination">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SearchAndBrowsePage;