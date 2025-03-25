import { useState, useEffect } from "react";
import { SkipData } from "../types/skipTypes";

export const useSkips = (fetchFunction: () => Promise<SkipData[]> , initialSkips: SkipData[] ) => {

  const [skips, setSkips] = useState<SkipData[]>([ ...initialSkips ]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  useEffect(() => {
  async  function getSkips () {
      try {
        const data = await fetchFunction();
        setSkips(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    getSkips();

  }, [fetchFunction]);

  return { skips, loading, error ,selectedCardId , setSelectedCardId  };
};
