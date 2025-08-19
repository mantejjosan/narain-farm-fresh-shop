import { Button } from "@/components/ui/button";
import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";

const NeonPopover = () => {
  const [open, setOpen] = useState(false);
  
  const handleClick = () => {
    setOpen(true);
    setTimeout(() => setOpen(false), 2000); // auto-close after 2s
  };

  return (
    <>
      <style >{`
        @keyframes neonGlow {
          0%, 100% { 
            box-shadow: 
              0 0 5px rgba(0, 255, 127, 0.6),
              0 0 15px rgba(0, 255, 127, 0.4),
              0 0 25px rgba(0, 255, 127, 0.2);
          }
          50% { 
            box-shadow: 
              0 0 10px rgba(0, 255, 127, 0.8),
              0 0 25px rgba(0, 255, 127, 0.6),
              0 0 40px rgba(0, 255, 127, 0.4);
          }
        }
        
        @keyframes slideInUp {
          0% { 
            opacity: 0; 
            transform: translateY(10px) scale(0.95);
            filter: blur(4px);
          }
          20% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
          80% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
          100% { 
            opacity: 0; 
            transform: translateY(-5px) scale(0.98);
            filter: blur(2px);
          }
        }
        
        @keyframes borderPulse {
          0%, 100% { border-color: rgba(0, 255, 127, 0.6); }
          50% { border-color: rgba(0, 255, 127, 1); }
        }

        .neon-popover {
          background: linear-gradient(135deg, 
            rgba(0, 20, 10, 0.95) 0%, 
            rgba(0, 30, 15, 0.98) 50%, 
            rgba(0, 20, 10, 0.95) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 255, 127, 0.6);
          animation: 
            slideInUp 2s ease-out forwards,
            neonGlow 2s ease-in-out,
            borderPulse 2s ease-in-out;
        }

        .neon-text {
          color: #00ff7f;
          text-shadow: 
            0 0 5px rgba(0, 255, 127, 0.7),
            0 0 10px rgba(0, 255, 127, 0.5),
            0 0 15px rgba(0, 255, 127, 0.3);
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .neon-arrow {
          background: linear-gradient(135deg, 
            rgba(0, 20, 10, 0.95), 
            rgba(0, 30, 15, 0.98));
          border-color: rgba(0, 255, 127, 0.6);
          filter: drop-shadow(0 0 3px rgba(0, 255, 127, 0.5));
        }

        .neon-button {
          background: linear-gradient(135deg, 
            rgba(0, 0, 0, 0.9) 0%, 
            rgba(0, 20, 10, 0.8) 50%, 
            rgba(0, 0, 0, 0.9) 100%);
          border: 1px solid rgba(0, 255, 127, 0.6);
          color: #00ff7f;
          text-shadow: 0 0 5px rgba(0, 255, 127, 0.5);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .neon-button:hover {
          background: linear-gradient(135deg, 
            rgba(0, 40, 20, 0.9) 0%, 
            rgba(0, 60, 30, 0.8) 50%, 
            rgba(0, 40, 20, 0.9) 100%);
          border-color: rgba(0, 255, 127, 0.8);
          color: #7fffd4;
          text-shadow: 0 0 8px rgba(0, 255, 127, 0.7);
          box-shadow: 
            0 0 15px rgba(0, 255, 127, 0.3),
            0 0 30px rgba(0, 255, 127, 0.1);
        }

        .neon-button:active {
          transform: translateY(1px);
          box-shadow: 
            0 0 10px rgba(0, 255, 127, 0.5),
            0 0 20px rgba(0, 255, 127, 0.2);
        }
      `}</style>

      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <Button
            variant="outline"
            size="lg"
            onClick={handleClick}
            className="neon-button hover-lift"
          >
            Book a Farm Tour
          </Button>
        </Popover.Trigger>
        
        <Popover.Content
          side="bottom"
          align="center"
          sideOffset={8}
          className="neon-popover relative px-4 py-3 rounded-xl z-50"
          onPointerDownOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse shadow-[0_0_6px_rgba(251,146,60,0.8)]" />
            <span className="neon-text text-sm font-medium">
              Not available currently
            </span>
          </div>
          
          {/* Enhanced Arrow */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
            <div className="w-3 h-3 neon-arrow border-t border-l rotate-45 rounded-tl-sm" />
          </div>
          
          {/* Subtle glow effect around the popover */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/10 via-transparent to-green-400/10 pointer-events-none" />
        </Popover.Content>
      </Popover.Root>
    </>
  );
};

export default NeonPopover;