import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, CreditCard, CheckCircle, Loader2 } from "lucide-react";
import { AirtimePackage } from "@/types/video";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface AirtimePaymentProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: (credits: number) => void;
}

const packages: AirtimePackage[] = [
  { id: "1", amount: 100, price: 0.99, currency: "USD" },
  { id: "2", amount: 500, price: 4.99, currency: "USD", popular: true },
  { id: "3", amount: 1000, price: 9.99, currency: "USD" },
  { id: "4", amount: 5000, price: 49.99, currency: "USD" },
];

export const AirtimePayment = ({ open, onClose, onSuccess }: AirtimePaymentProps) => {
  const [selectedPackage, setSelectedPackage] = useState<AirtimePackage | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = async () => {
    if (!selectedPackage || !phoneNumber) {
      toast.error("Please select a package and enter your phone number");
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setPaymentSuccess(true);
    
    // Update credits in parent component
    if (onSuccess) {
      onSuccess(selectedPackage.amount);
    }
    
    toast.success(`Successfully purchased ${selectedPackage.amount} credits!`);
    
    // Reset after 2 seconds
    setTimeout(() => {
      setPaymentSuccess(false);
      setSelectedPackage(null);
      setPhoneNumber("");
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-border/50 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Buy Credits with Airtime
          </DialogTitle>
        </DialogHeader>

        {!paymentSuccess ? (
          <div className="space-y-6">
            {/* Phone Number Input */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 234 567 8900"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="pl-10 bg-background/50 border-border/50"
                />
              </div>
            </div>

            {/* Package Selection */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Select Package</Label>
              <div className="grid grid-cols-2 gap-3">
                {packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg)}
                    className={cn(
                      "relative p-4 rounded-lg border-2 transition-all",
                      "hover:scale-105 hover:shadow-lg",
                      selectedPackage?.id === pkg.id
                        ? "border-primary bg-primary/10 shadow-glow"
                        : "border-border/50 bg-background/30",
                      pkg.popular && "ring-2 ring-accent ring-offset-2 ring-offset-background"
                    )}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-bold bg-accent text-accent-foreground rounded-full">
                        Popular
                      </span>
                    )}
                    <div className="text-2xl font-bold text-foreground">
                      {pkg.amount}
                    </div>
                    <div className="text-xs text-muted-foreground">Credits</div>
                    <div className="mt-2 text-lg font-semibold text-primary">
                      ${pkg.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Button */}
            <Button
              onClick={handlePayment}
              disabled={!selectedPackage || !phoneNumber || isProcessing}
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Pay with Airtime
                </>
              )}
            </Button>

            {/* Demo Notice */}
            <p className="text-xs text-center text-muted-foreground">
              This is a demo. No real charges will be made.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-lg font-semibold">Payment Successful!</h3>
            <p className="text-sm text-muted-foreground text-center">
              {selectedPackage?.amount} credits have been added to your account
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};