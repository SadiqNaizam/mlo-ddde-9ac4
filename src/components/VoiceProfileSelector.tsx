import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

interface VoiceProfileSelectorProps {
  /** The display name of the voice profile. */
  voiceName: string;
  /** A callback function to trigger the voice sample playback. */
  onPlaySample: () => void;
}

/**
 * A small, interactive element used within the 'CharacterVoiceMapper'.
 * It displays a voice's name and includes a play button to let users
 * sample the voice before assigning it to a character.
 */
const VoiceProfileSelector: React.FC<VoiceProfileSelectorProps> = ({ voiceName, onPlaySample }) => {
  console.log(`VoiceProfileSelector loaded for voice: ${voiceName}`);

  const handlePlayClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent the parent dropdown or select from closing if this component is inside one.
    e.stopPropagation();
    onPlaySample();
  };

  return (
    <div className="flex items-center justify-between w-full p-2 rounded-md transition-colors">
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
        {voiceName}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={handlePlayClick}
        aria-label={`Sample voice for ${voiceName}`}
        className="h-8 w-8"
      >
        <Play className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default VoiceProfileSelector;