import { useState } from "react";
import RatingCard from "./components/RatingCard";
import ThankyouCard from "./components/ThankyouCard";

function App() {
    const [numRating, setNumRating] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <main className="p-6 h-screen bg-main-background flex justify-center items-center">
            <section>
                {isSubmitted ? (
                    <ThankyouCard numRating={numRating} />
                ) : (
                    <RatingCard
                        numRating={numRating}
                        setNumRating={setNumRating}
                        setIsSubmitted={setIsSubmitted}
                    />
                )}
            </section>
        </main>
    );
}

export default App;
