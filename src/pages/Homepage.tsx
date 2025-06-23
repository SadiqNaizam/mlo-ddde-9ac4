import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookshelfCarousel from '@/components/BookshelfCarousel';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

// --- Placeholder Data for Carousels ---
// The 'Book' interface is defined within BookshelfCarousel.tsx, so we just match the structure here.
const newArrivals = [
  { id: '1', slug: 'the-midnight-library', title: 'The Midnight Library', author: 'Matt Haig', coverImageUrl: 'https://source.unsplash.com/random/400x600?book-cover&sig=1' },
  { id: '2', slug: 'project-hail-mary', title: 'Project Hail Mary', author: 'Andy Weir', coverImageUrl: 'https://source.unsplash.com/random/400x600?book-cover&sig=2' },
  { id: '3', slug: 'klara-and-the-sun', title: 'Klara and the Sun', author: 'Kazuo Ishiguro', coverImageUrl: 'https://source.unsplash.com/random/400x600?book-cover&sig=3' },
  { id: '4', slug: 'the-four-winds', title: 'The Four Winds', author: 'Kristin Hannah', coverImageUrl: 'https://source.unsplash.com/random/400x600?book-cover&sig=4' },
  { id: '5', slug: 'the-lincoln-highway', title: 'The Lincoln Highway', author: 'Amor Towles', coverImageUrl: 'https://source.unsplash.com/random/400x600?book-cover&sig=5' },
  { id: '6', slug: 'crying-in-h-mart', title: 'Crying in H Mart', author: 'Michelle Zauner', coverImageUrl: 'https://source.unsplash.com/random/400x600?book-cover&sig=6' },
];

const bestsellers = [
  { id: '7', slug: 'atomic-habits', title: 'Atomic Habits', author: 'James Clear', coverImageUrl: 'https://source.unsplash.com/random/400x600?book-cover&sig=7' },
  { id: '8', slug: 'the-seven-husbands-of-evelyn-hugo', title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', coverImageUrl: 'https://source.unsplash.com/random/400x600?book-cover&sig=8' },
  { id: '9', slug: 'dune', title: 'Dune', author: 'Frank Herbert', coverImageUrl: 'https://source.unsplash.com/random/400x600?book-cover&sig=9' },
  { id: '10', slug: 'where-the-crawdads-sing', title: 'Where the Crawdads Sing', author: 'Delia Owens', coverImageUrl: 'https://source.unsplash.com/random/400x600?book-cover&sig=10' },
  { id: '11', slug: 'the-silent-patient', title: 'The Silent Patient', author: 'Alex Michaelides', coverImageUrl: 'https://source.unsplash.com/random/400x600?book-cover&sig=11' },
];

const curatedPicks = [
  { id: '12', slug: 'circe', title: 'Circe', author: 'Madeline Miller', coverImageUrl: 'https://source.unsplash.com/random/400x600?book-cover&sig=12' },
  { id: '13', slug: 'the-house-in-the-cerulean-sea', title: 'The House in the Cerulean Sea', author: 'TJ Klune', coverImageUrl: 'https://source.unsplash.com/random/400x600?book-cover&sig=13' },
  { id: '14', slug: 'piranesi', title: 'Piranesi', author: 'Susanna Clarke', coverImageUrl: 'https://source.unsplash.com/random/400x600?book-cover&sig=14' },
  { id: '15', slug: 'a-gentleman-in-moscow', title: 'A Gentleman in Moscow', author: 'Amor Towles', coverImageUrl: 'https://source.unsplash.com/random/400x600?book-cover&sig=15' },
  { id: '16', slug: 'the-song-of-achilles', title: 'The Song of Achilles', author: 'Madeline Miller', coverImageUrl: 'https://source.unsplash.com/random/400x600?book-cover&sig=16' },
  { id: '17', slug: 'exhalation', title: 'Exhalation', author: 'Ted Chiang', coverImageUrl: 'https://source.unsplash.com/random/400x600?book-cover&sig=17' },
];

const Homepage = () => {
  console.log('Homepage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="text-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-amber-50 tracking-wide">
            Welcome to The Reading Room
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Discover your next great story in a sanctuary built for book lovers.
          </p>
          <div className="mt-8 max-w-xl mx-auto flex gap-2">
            <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Find a book, author, or genre..."
                  className="w-full pl-10 pr-4 py-3 h-12 text-lg bg-slate-800 border-slate-700 focus:ring-amber-400 text-white"
                />
            </div>
            <Link to="/search-and-browse">
                <Button size="lg" className="h-12 bg-amber-600 hover:bg-amber-700">
                    Search
                </Button>
            </Link>
          </div>
        </section>

        {/* Bookshelves Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          <BookshelfCarousel title="New Arrivals" books={newArrivals} />
          <BookshelfCarousel title="Bestsellers" books={bestsellers} />
          <BookshelfCarousel title="Curated for You" books={curatedPicks} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;