import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { festiveOffer, companyConfig } from '@/config/company';

export function FestiveBanner() {
  const [isVisible, setIsVisible] = useState(companyConfig.features.showFestiveBanner);

  if (!isVisible) return null;

  return (
    <div className="relative gradient-primary text-primary-foreground py-3 px-4 animate-fade-in">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <Sparkles className="h-5 w-5 animate-pulse" />
          <div className="text-center flex-1">
            <span className="text-sm font-medium">
              🇮🇳 {festiveOffer.title} - {festiveOffer.discount} with code{' '}
              <span className="font-bold bg-white/20 px-2 py-1 rounded">
                {festiveOffer.code}
              </span>
            </span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="text-primary-foreground hover:bg-white/20 h-8 w-8"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}