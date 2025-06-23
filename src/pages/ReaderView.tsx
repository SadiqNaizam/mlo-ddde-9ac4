import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ImmersiveReaderUI from '@/components/ImmersiveReaderUI';

/**
 * ReaderView serves as the dedicated page for the immersive reading experience.
 * It's designed to be distraction-free, omitting standard navigation like headers and footers.
 * Its primary role is to render the ImmersiveReaderUI component, which contains all the
 * interactive logic for reading, audio playback, and voice personalization.
 */
const ReaderView: React.FC = () => {
  const location = useLocation();
  // The bookId is passed via navigation state from components like BookCoverCard
  const bookId = location.state?.bookId;

  useEffect(() => {
    console.log('ReaderView loaded');
    if (bookId) {
      console.log('Attempting to display content for book ID:', bookId);
      // In a real application, you would use this bookId to fetch the specific book's
      // content and character list. The ImmersiveReaderUI component would then
      // receive this data as props. For now, it uses its own placeholder data.
    } else {
      console.log('No book ID provided; ImmersiveReaderUI will use its default placeholder content.');
    }
  }, [bookId]);

  // The ImmersiveReaderUI is a self-contained component that takes over the full screen.
  // This page simply acts as the route entry point for it.
  return (
    <ImmersiveReaderUI />
  );
};

export default ReaderView;