import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookCoverCard from '@/components/BookCoverCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Placeholder data for books owned by the user. isOwned is true for all.
const myBooks = [
  {
    id: 'user-book-1',
    title: 'The Priory of the Orange Tree',
    author: 'Samantha Shannon',
    coverImageUrl: 'https://images.unsplash.com/photo-1626084059911-0aa19842f174?q=80&w=800&auto=format&fit=crop',
    isOwned: true,
  },
  {
    id: 'user-book-2',
    title: 'A Dowry of Blood',
    author: 'S.T. Gibson',
    coverImageUrl: 'https://images.unsplash.com/photo-1593340574221-9b1a2c55c8de?q=80&w=800&auto=format&fit=crop',
    isOwned: true,
  },
  {
    id: 'user-book-3',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    coverImageUrl: 'https://images.unsplash.com/photo-1588666307436-05a2d0155cdf?q=80&w=800&auto=format&fit=crop',
    isOwned: true,
  },
  {
    id: 'user-book-4',
    title: 'The Invisible Life of Addie LaRue',
    author: 'V.E. Schwab',
    coverImageUrl: 'https://images.unsplash.com/photo-1542827177-362a249a0317?q=80&w=800&auto=format&fit=crop',
    isOwned: true,
  },
  {
    id: 'user-book-5',
    title: 'Dune',
    author: 'Frank Herbert',
    coverImageUrl: 'https://images.unsplash.com/photo-1598437939983-2ab1b5c49b49?q=80&w=800&auto=format&fit=crop',
    isOwned: true,
  },
  {
    id: 'user-book-6',
    title: 'Circe',
    author: 'Madeline Miller',
    coverImageUrl: 'https://images.unsplash.com/photo-1517415252834-fb560c07f662?q=80&w=800&auto=format&fit=crop',
    isOwned: true,
  },
   {
    id: 'user-book-7',
    title: 'The Three-Body Problem',
    author: 'Cixin Liu',
    coverImageUrl: 'https://images.unsplash.com/photo-1550923023-1c88a8d7515c?q=80&w=800&auto=format&fit=crop',
    isOwned: true,
  },
  {
    id: 'user-book-8',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    coverImageUrl: 'https://images.unsplash.com/photo-1531988042231-f39a6cc12a3b?q=80&w=800&auto=format&fit=crop',
    isOwned: true,
  },
];


const UserLibraryPage = () => {
    console.log('UserLibraryPage loaded');

    return (
        <div className="flex flex-col min-h-screen bg-slate-900 text-white">
            <Header />
            <main className="flex-grow">
                <div className="container mx-auto px-4 py-8 md:py-12">
                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-100">My Library</h1>
                        <p className="text-lg text-gray-400 mt-2">Your personal collection of literary adventures.</p>
                    </header>

                    <Tabs defaultValue="all" className="w-full">
                        <TabsList className="grid w-full max-w-md grid-cols-3 bg-slate-800">
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="ebooks">eBooks</TabsTrigger>
                            <TabsTrigger value="audiobooks">Audiobooks</TabsTrigger>
                        </TabsList>

                        <TabsContent value="all" className="mt-8">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-6">
                                {myBooks.map((book) => (
                                    <BookCoverCard key={book.id} book={book} />
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="ebooks" className="mt-8 text-center py-16">
                            <p className="text-gray-400">eBook collection will be displayed here.</p>
                        </TabsContent>

                        <TabsContent value="audiobooks" className="mt-8 text-center py-16">
                            <p className="text-gray-400">Audiobook collection will be displayed here.</p>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default UserLibraryPage;