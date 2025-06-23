import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ChevronLeft, ChevronRight, Play, Pause, Users, ZoomIn, ZoomOut } from 'lucide-react';
import CharacterVoiceMapper from '@/components/CharacterVoiceMapper'; // Assuming this component exists

// Placeholder book data
const placeholderBookData = {
  title: "A Tale of Two Cities",
  author: "Charles Dickens",
  pages: [
    "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    "We had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way—in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.",
    "There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever.",
    "It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this. Mrs. Southcott had recently attained her five-and-twentieth blessed birthday, of whom a prophetic private in the Life Guards had heralded the sublime appearance by announcing that arrangements were made for the swallowing up of London and Westminster.",
    "Even the Cock-lane ghost had been laid only a round dozen of years, after rapping out its messages, as the spirits of this very year last past (supernaturally deficient in originality) rapped out theirs. Mere messages in the earthly order of events had lately come to the English Crown and People, from a congress of British subjects in America: which, strange to relate, have proved more important to the human race than any communications yet received through any of the chickens of the Cock-lane brood."
  ],
  characters: [ // Placeholder for the CharacterVoiceMapper
    { id: '1', name: 'Sydney Carton' },
    { id: '2', name: 'Lucie Manette' },
    { id: '3', name: 'Charles Darnay' },
    { id: '4', name: 'Madame Defarge' },
  ]
};

const ImmersiveReaderUI: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fontSize, setFontSize] = useState(18);

  useEffect(() => {
    console.log('ImmersiveReaderUI loaded');
  }, []);

  const totalPages = placeholderBookData.pages.length;

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleFontSizeChange = (value: number) => {
    setFontSize(Math.max(12, Math.min(32, value)));
  }

  return (
    <div className="fixed inset-0 bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-stone-200 flex flex-col items-center justify-center font-serif transition-colors duration-500">
      {/* Main Reading Area */}
      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
        {/* Previous Page Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full"
              aria-label="Previous Page"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Previous Page</p>
          </TooltipContent>
        </Tooltip>

        {/* Text Content */}
        <main className="w-full max-w-3xl h-[calc(100%-100px)] overflow-y-auto p-8 bg-white dark:bg-stone-800 shadow-lg rounded-lg">
          <p
            className="text-justify leading-relaxed whitespace-pre-wrap transition-all duration-300"
            style={{ fontSize: `${fontSize}px` }}
          >
            {placeholderBookData.pages[currentPage]}
          </p>
        </main>

        {/* Next Page Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full"
              aria-label="Next Page"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Next Page</p>
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Bottom Control Bar */}
      <footer className="absolute bottom-0 left-0 right-0 h-20 bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm border-t border-stone-200 dark:border-stone-700 flex items-center justify-center px-4 z-30">
        <div className="w-full max-w-4xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 w-1/3">
             <ZoomOut className="h-5 w-5" />
             <Slider
                min={12}
                max={32}
                step={1}
                value={[fontSize]}
                onValueChange={(value) => handleFontSizeChange(value[0])}
                className="w-32"
                aria-label="Font size"
            />
            <ZoomIn className="h-5 w-5" />
          </div>

          <div className="flex flex-col items-center justify-center flex-grow">
            <Button variant="ghost" size="icon" onClick={() => setIsPlaying(!isPlaying)} aria-label={isPlaying ? "Pause audio" : "Play audio"}>
              {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
            </Button>
            <span className="text-xs font-sans mt-1">Page {currentPage + 1} of {totalPages}</span>
          </div>

          <div className="flex items-center justify-end w-1/3">
            <Dialog>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="icon" aria-label="Character Voice Settings">
                      <Users className="h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Assign Character Voices</p>
                </TooltipContent>
              </Tooltip>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Assign Character Voices</DialogTitle>
                  <DialogDescription>
                    Select a unique voice for each character to create a multi-cast audio experience.
                  </DialogDescription>
                </DialogHeader>
                <CharacterVoiceMapper characters={placeholderBookData.characters} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ImmersiveReaderUI;