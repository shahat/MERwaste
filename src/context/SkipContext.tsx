import { createContext, ReactNode, useState } from "react";
import { useSkips } from "../hooks/useSkips"; // Import our custom hook
import { SkipData } from "../types/skipTypes";
import { fetchSkips } from "../services/skipService";

// =====================
// Define skip context type
// =====================

interface SkipContextType {
  skips: SkipData[];
  loading: boolean;
  error: string | null;
  selectedCardId: number | null;
  selectCard: (id: number) => void;
  currentStep: number | 0;
  nextStep: () => void;
  prevStep: () => void;
}

// =====================
// Create the skipcontext
// =====================
const SkipContext = createContext<SkipContextType | undefined>(undefined);

// =====================
//  skip provider
// =====================
const SkipProvider = ({ children }: { children: ReactNode }) => {
  const { skips, loading, error } = useSkips(fetchSkips, []);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState<number | 0>(2);
  
  const selectCard = (id: number) => {
    setSelectedCardId(id);
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep < 6 ? prevStep + 1 : prevStep));
  };
  
  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 0 ? prevStep -1 : prevStep));
  };

  return (
    <SkipContext.Provider
      value={{
        skips,
        loading,
        error,
        selectedCardId,
        selectCard,
        currentStep,
        nextStep,
        prevStep,
      }}
    >
      {children}
    </SkipContext.Provider>
  );
};

export { SkipContext, SkipProvider };
