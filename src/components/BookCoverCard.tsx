import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useToast } from "@/components/ui/use-toast";
import { ShoppingCart, BookOpen } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  author: string;
  coverImageUrl: string;
  isOwned: boolean;
}

interface BookCoverCardProps {
  book: Book;
}

const BookCoverCard: React.FC<BookCoverCardProps> = ({ book }) => {
  console.log('BookCoverCard loaded for:', book.title);
  const { toast } = useToast();

  const handlePurchaseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent the parent Link from navigating
    e.preventDefault();
    e.stopPropagation();

    toast({
      title: "Purchase Action",
      description: `"${book.title}" would be added to your cart.`,
    });
    console.log(`Purchase button clicked for book ID: ${book.id}`);
  };
  
  const handleReadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Just stop propagation, let the Link component handle navigation
    e.stopPropagation();
  };

  return (
    <motion.div
      className="group relative cursor-pointer rounded-md overflow-hidden shadow-lg"
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link to="/book-detail" state={{ bookId: book.id }} aria-label={`View details for ${book.title}`}>
        <AspectRatio ratio={2 / 3} className="bg-muted">
          <img
            src={book.coverImageUrl}
            alt={`Cover of ${book.title}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </AspectRatio>

        {/* Overlay for buttons */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center p-4">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-3">
            {book.isOwned ? (
              <Button asChild className="shadow-md">
                 <Link to="/reader" state={{ bookId: book.id }} onClick={handleReadClick}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read Now
                 </Link>
              </Button>
            ) : (
              <Button onClick={handlePurchaseClick} className="shadow-md">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Purchase
              </Button>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BookCoverCard;