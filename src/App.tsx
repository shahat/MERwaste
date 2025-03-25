import "./App.css";
import { use } from "react";
import { SkipContext } from "./context/SkipContext";
import GardenSkipsPage from "./pages/gardenSkipsPage/GardenSkipsPage";
import NavBar from "./components/navBar/NavBar";
import { SkipData } from "./types/skipTypes";
function App() {
  const skipContext = use(SkipContext);
  if (!skipContext) {
    throw new Error("SkipList must be used within a SkipProvider");
  }
  const { skips, loading,  selectedCardId  } = skipContext;
  const selectedSkip: SkipData | undefined = skips.find((skip) => skip.id === selectedCardId);
  if (loading) return <div>Loading...</div>;
  
  return (
    <>
      <main className="min-h-screen m-x-auto bg-[#121212] text-white pt-8">
        <GardenSkipsPage />
        {
          selectedCardId &&  <NavBar 
          size = {selectedSkip && selectedSkip.size} 
          price={selectedSkip && (selectedSkip?.price_before_vat + selectedSkip?.vat) } 
          duration={selectedSkip &&selectedSkip.hire_period_days}/>
        }
      </main>
    </>
  );
}
export default App;
