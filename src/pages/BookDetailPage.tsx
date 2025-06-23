import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Star, Headphones, ShoppingCart, BookOpen } from 'lucide-react';

// Mock data for the book details. In a real app, this would come from an API.
const mockBook = {
  id: '978-0765326355',
  title: 'The Way of Kings',
  author: 'Brandon Sanderson',
  coverImageUrl: 'https://images.unsplash.com/photo-1603289983981-aa88e89b2521?q=80&w=1887&auto=format&fit=crop',
  synopsis: "The Way of Kings is an epic fantasy novel. In Roshar, a world of stone and storms, uncanny tempests of incredible power sweep the rocky terrain. It has been centuries since the fall of the ten consecrated orders known as the Knights Radiant, but their Shardblades and Shardplate remain: mystical swords and suits of armor that transform ordinary men into near-invincible warriors. Men trade kingdoms for Shardblades. Wars are fought for them, and won by them. One such war rages on a ruined landscape called the Shattered Plains.",
  genres: ['Epic Fantasy', 'High Fantasy', 'Adventure'],
  rating: 4.8,
  reviewCount: 2451,
  reviews: [
    {
      id: 1,
      user: 'Kaladin Stormblessed',
      rating: 5,
      comment: "Life before death. Strength before weakness. Journey before destination. An absolute masterpiece of world-building."
    },
    {
      id: 2,
      user: 'Dalinar Kholin',
      rating: 5,
      comment: "The most important step a man can take? It's the next one. Always the next step. This book embodies that."
    },
    {
      id: 3,
      user: 'Shallan Davar',
      rating: 4,
      comment: "A bit long-winded in places, but the artistic descriptions and intricate plot are worth the read. No, it was perfect. Wait... what was I saying?"
    }
  ],
  isOwned: false, // This would determine if "Read" or "Purchase" is shown
};

const BookDetailPage = () => {
  const location = useLocation();
  // In a real app, you might use location.state.bookId to fetch data
  const book = location.state?.book || mockBook;

  console.log('BookDetailPage loaded for:', book.title);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-5 h-5 text-amber-400 fill-amber-400" />);
    }
    // Note: No half-star icon available, so we'll just round for this example
    return stars;
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-gray-300">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/search-and-browse">Store</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{book.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Book Cover */}
          <div className="md:col-span-4 lg:col-span-3">
             <img 
               src={book.coverImageUrl} 
               alt={`Cover of ${book.title}`}
               className="rounded-lg shadow-2xl w-full aspect-[2/3] object-cover"
             />
          </div>

          {/* Book Details */}
          <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-white">{book.title}</h1>
            <p className="text-xl text-gray-400">
              by <a href="#" className="hover:text-amber-300 transition-colors">{book.author}</a>
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {renderStars(book.rating)}
              </div>
              <span className="text-gray-400">{book.rating.toFixed(1)} ({book.reviewCount} reviews)</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {book.genres.map(genre => (
                <Badge key={genre} variant="secondary">{genre}</Badge>
              ))}
            </div>

            <Separator className="my-4 bg-slate-700" />
            
            <p className="leading-relaxed text-gray-300">
              {book.synopsis}
            </p>

            <Separator className="my-4 bg-slate-700" />
            
            <div className="flex flex-wrap gap-3 items-center">
              {book.isOwned ? (
                  <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                      <Link to="/reader" state={{ bookId: book.id }}>
                          <BookOpen className="mr-2 h-5 w-5" /> Read Online
                      </Link>
                  </Button>
              ) : (
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                      <ShoppingCart className="mr-2 h-5 w-5" /> Purchase
                  </Button>
              )}
              <Button size="lg" variant="outline">
                <Headphones className="mr-2 h-5 w-5" /> Listen to a Sample
              </Button>
            </div>
          </div>
        </div>
        
        {/* User Reviews Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold font-serif mb-6 text-white">User Reviews</h2>
          <div className="space-y-6">
            {book.reviews.map(review => (
              <Card key={review.id} className="bg-slate-900 border-slate-800">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg text-gray-200">{review.user}</CardTitle>
                    <div className="flex items-center gap-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookDetailPage;