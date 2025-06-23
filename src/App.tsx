import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import BookDetailPage from "./pages/BookDetailPage";
import Homepage from "./pages/Homepage";
import ReaderView from "./pages/ReaderView";
import SearchAndBrowsePage from "./pages/SearchAndBrowsePage";
import UserLibraryPage from "./pages/UserLibraryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
        <Routes>


          <Route path="/" element={<Homepage />} />
          <Route path="/book-detail" element={<BookDetailPage />} />
          <Route path="/reader" element={<ReaderView />} />
          <Route path="/search-and-browse" element={<SearchAndBrowsePage />} />
          <Route path="/user-library" element={<UserLibraryPage />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />


        </Routes>
    </BrowserRouter>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;
