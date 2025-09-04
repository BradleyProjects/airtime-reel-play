import { Tv, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onOpenPayment: () => void;
  credits: number;
}

export const Header = ({ onOpenPayment, credits }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/20">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Tv className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            VibeStream
          </span>
        </div>

        {/* Credits Button */}
        <Button
          onClick={onOpenPayment}
          variant="outline"
          size="sm"
          className="border-primary/50 hover:bg-primary/10 flex items-center gap-2"
        >
          <Coins className="w-4 h-4 text-primary" />
          <span className="font-semibold">{credits}</span>
        </Button>
      </div>
    </header>
  );
};