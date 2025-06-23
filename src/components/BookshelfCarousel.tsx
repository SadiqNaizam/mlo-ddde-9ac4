import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BookCoverCard from '@/components/BookCoverCard';

// Define the shape of a single book object, which will be passed to BookCoverCard
interface Book {
  id: string;
  slug: string; // To generate the link for the detail page, e.g., /book-detail?id=... or /book-detail/slug
  title: string;
  author: string;
  coverImageUrl: string;
}

// Define the props for the BookshelfCarousel itself
interface BookshelfCarouselProps {
  title: string;
  books: Book[];
}

const BookshelfCarousel: React.FC<BookshelfCarouselProps> = ({ title, books }) => {
  console.log('BookshelfCarousel loaded');

  // A check to prevent rendering an empty carousel.
  if (!books || books.length === 0) {
    return null;
  }

  return (
    <section 
      aria-labelledby="carousel-title" 
      className="w-full my-12 p-6 md:p-8 bg-[#4a2c2a] rounded-lg shadow-2xl border-2 border-[#382220]"
      style={{
        // A subtle texture can enhance the "wood" feel.
        // This is a simple data URI for a noise texture.
        backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 80 40\" width=\"80\" height=\"40\"%3E%3Cpath fill=\"%23382220\" fill-opacity=\"0.4\" d=\"M0 40a20 20 0 0 1 20-20 20 20 0 0 1 20 20H0zM40 40a20 20 0 0 1 20-20 20 20 0 0 1 20 20H40z\"%3E%3C/path%3E%3C/svg%3E')"
      }}
    >
      <h2 id="carousel-title" className="text-3xl font-bold text-stone-100 mb-6 font-serif tracking-wide">
        {title}
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: false, // Looping can be disorienting for browsing a finite list.
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {books.map((book, index) => (
            <CarouselItem key={`${book.id}-${index}`} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/7">
              <div className="p-1">
                <BookCoverCard
                  id={book.id}
                  slug={book.slug}
                  title={book.title}
                  author={book.author}
                  coverImageUrl={book.coverImageUrl}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* The navigation buttons are styled to blend with the dark bookshelf theme */}
        <CarouselPrevious className="text-white/70 bg-black/30 hover:bg-black/50 border-white/20 hover:text-white transition-colors -left-4" />
        <CarouselNext className="text-white/70 bg-black/30 hover:bg-black/50 border-white/20 hover:text-white transition-colors -right-4" />
      </Carousel>
    </section>
  );
};

export default BookshelfCarousel;