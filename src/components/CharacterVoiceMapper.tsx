import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

// --- Mock Data & Types (as would be passed in from the parent component) ---

export interface Character {
  id: string;
  name: string;
}

export interface Voice {
  id: string;
  name: string;
  description: string;
}

export type VoiceMap = Record<string, string>;

// Predefined library of voices
const availableVoices: Voice[] = [
  { id: 'narrator-standard', name: 'Standard Narrator', description: 'A clear, neutral voice.' },
  { id: 'male-deep', name: 'Deep Male', description: 'A resonant, authoritative tone.' },
  { id: 'male-baritone', name: 'Warm Baritone', description: 'A friendly and engaging voice.' },
  { id: 'female-soprano', name: 'Bright Female', description: 'An energetic and youthful voice.' },
  { id: 'female-alto', name: 'Calm Alto', description: 'A soothing and gentle tone.' },
  { id: 'elder-male', name: 'Elderly Male', description: 'A wise, raspy voice.' },
  { id: 'elder-female', name: 'Elderly Female', description: 'A kind, grandmotherly voice.' },
];

// Mock character list for a book
const mockCharacters: Character[] = [
    { id: 'alina-starkov', name: 'Alina Starkov' },
    { id: 'malyen-oretsev', name: 'Malyen Oretsev' },
    { id: 'the-darkling', name: 'The Darkling' },
    { id: 'genya-safin', name: 'Genya Safin' },
    { id: 'zoya-nazyalensky', name: 'Zoya Nazyalensky' },
    { id: 'nikolai-lantsov', name: 'Nikolai Lantsov' },
    { id: 'kaz-brekker', name: 'Kaz Brekker' },
    { id: 'inej-ghafa', name: 'Inej Ghafa' },
];

// --- Component Definition ---

interface CharacterVoiceMapperProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  characters?: Character[];
  initialVoiceMap?: VoiceMap;
  onSave: (newVoiceMap: VoiceMap) => void;
}

const CharacterVoiceMapper: React.FC<CharacterVoiceMapperProps> = ({
  open,
  onOpenChange,
  characters = mockCharacters,
  initialVoiceMap = {},
  onSave,
}) => {
  const [voiceMap, setVoiceMap] = useState<VoiceMap>(initialVoiceMap);

  useEffect(() => {
    console.log('CharacterVoiceMapper loaded');
    // Initialize the voice map when the component mounts or initial map changes
    setVoiceMap(initialVoiceMap);
  }, [initialVoiceMap]);

  const handleVoiceChange = (characterId: string, voiceId: string) => {
    setVoiceMap(prev => ({ ...prev, [characterId]: voiceId }));
  };

  const handleSaveChanges = () => {
    console.log("Saving voice map:", voiceMap);
    onSave(voiceMap);
    onOpenChange(false); // Close the dialog on save
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] bg-white dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">Character Voice Mapper</DialogTitle>
          <DialogDescription>
            Assign a unique voice to each character for a personalized multi-cast audio experience.
          </DialogDescription>
        </DialogHeader>

        <Separator />

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6 py-4">
            {characters.map((character) => (
              <div key={character.id} className="grid grid-cols-2 items-center gap-4">
                <Label htmlFor={`voice-for-${character.id}`} className="font-semibold text-right">
                  {character.name}
                </Label>
                <Select
                  value={voiceMap[character.id]}
                  onValueChange={(value) => handleVoiceChange(character.id, value)}
                >
                  <SelectTrigger id={`voice-for-${character.id}`} className="w-full">
                    <SelectValue placeholder="Select a voice..." />
                  </SelectTrigger>
                  <SelectContent>
                    {availableVoices.map((voice) => (
                      <SelectItem key={voice.id} value={voice.id}>
                        {voice.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <Separator />

        <DialogFooter className="pt-4">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CharacterVoiceMapper;