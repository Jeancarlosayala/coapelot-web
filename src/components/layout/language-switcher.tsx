
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Language {
  code: string;
  name: string;
  flagEmoji: string;
}

const languagesData: Language[] = [
  { code: 'es', name: 'Español', flagEmoji: '🇪🇸' },
  { code: 'en', name: 'English', flagEmoji: '🇬🇧' },
];

export function LanguageSwitcher() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languagesData[0]); // Default to Spanish

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 border-neutral-300 focus-visible:ring-1 focus-visible:ring-ring h-10" // Matched height with other nav items
        >
          <span className="text-lg" aria-hidden="true">{selectedLanguage.flagEmoji}</span>
          <span>{selectedLanguage.name}</span>
          <ChevronDown className="h-4 w-4 opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border-neutral-200 shadow-lg min-w-[160px]"> {/* Adjusted min-width */}
        {languagesData.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onSelect={() => setSelectedLanguage(lang)}
            className={cn(
              "flex items-center space-x-3 cursor-pointer px-3 py-2 text-sm",
              selectedLanguage.code === lang.code 
                ? "bg-neutral-100 text-primary font-semibold" 
                : "text-neutral-700 hover:bg-neutral-100"
            )}
          >
            <span className="text-lg" aria-hidden="true">{lang.flagEmoji}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
