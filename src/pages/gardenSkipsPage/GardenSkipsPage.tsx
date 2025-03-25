import StepsBar from "../../components/stepsBar/stepsBar";
import SkipCard from '../../components/skipCard/SkipCard';
import { SkipContext } from "../../context/SkipContext";
import { use } from "react";
export default function GardenSkipsPage() {
 const skipContext = use(SkipContext);
  if (!skipContext) {
    throw new Error("SkipList must be used within a SkipProvider");
  } 
  const { skips , selectedCardId, selectCard } = skipContext;
  return (
    <>
      <StepsBar />
      <div className="max-w-7xl mx-auto  pb-32 pt-10 px-4 lg:px-2">
        <h2 className="text-2xl font-bold text-center mb-4">
          Choose Your Skip Size
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Select the skip size that best suits your needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skips?.map((skip) => (
            <SkipCard key={skip.size} data={skip} selectCard={selectCard} selectedCardId={selectedCardId}  />
          ))}
        </div>
      </div>
    </>
  );
}
