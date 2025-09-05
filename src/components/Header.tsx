import { Tv, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onOpenPayment: () => void;
  credits: number;
}

export const Header = ({ onOpenPayment, credits }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/20">
      <div className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://github.com/BradleyProjects/airtime-reel-play/blob/main/swipr-logo.png"
            alt="Swipr Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
          <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Swipr
          </span>
        </div>

        {/* Credits Button */}
        <Button
          onClick={onOpenPayment}
          variant="outline"
          size="sm"
          className="border-primary/50 hover:bg-primary/10 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 min-w-[44px] min-h-[44px]"
        >
          <Coins className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          <span className="font-semibold text-base sm:text-lg">{credits}</span>
        </Button>
      </div>
    </header>
  );
};
