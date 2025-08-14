import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Button } from './ui/button';
import { Sparkles, Gift } from 'lucide-react';
import { festiveOffer, companyConfig } from '@/config/company';

export function FirstVisitPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('narain-farms-visited');
    
    if (!hasVisited && companyConfig.features.showFirstVisitPopup) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('narain-farms-visited', 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md mx-auto animate-bounce-in">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 gradient-primary rounded-full flex items-center justify-center">
            <Gift className="h-8 w-8 text-primary-foreground" />
          </div>
          <DialogTitle className="text-xl font-heading">
            Welcome to {companyConfig.shortName}! 🇮🇳
          </DialogTitle>
          <DialogDescription className="text-center space-y-3 pt-2">
            <p className="text-base">
              Celebrate Independence Day with fresh organic produce!
            </p>
            <div className="gradient-earth p-4 rounded-lg border border-border/50">
              <div className="flex items-center justify-center gap-2 text-primary mb-2">
                <Sparkles className="h-5 w-5" />
                <span className="font-semibold text-lg">{festiveOffer.discount} OFF</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Use code <span className="font-mono font-bold text-primary">{festiveOffer.code}</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Valid till {festiveOffer.validTill}
              </p>
            </div>
            <p className="text-sm">
              {festiveOffer.description}
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-3 pt-4">
          <Button
            variant="outline"
            onClick={handleClose}
            className="flex-1"
          >
            Browse Products
          </Button>
          <Button
            variant="hero"
            onClick={handleClose}
            className="flex-1"
          >
            Shop Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}