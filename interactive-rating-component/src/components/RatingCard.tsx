import starIcon from "../assets/images/icon-star.svg";

type RatingCardProps = {
    numRating: number;
    setNumRating: (raitng: number) => void;
    setIsSubmitted: (isSubmitted: boolean) => void;
};

const RatingCard = ({
    numRating,
    setNumRating,
    setIsSubmitted,
}: RatingCardProps) => {
    return (
        <div className="max-w-[25.75rem] w-full p-[1.375rem] bg-card-background rounded-2xl flex flex-col gap-6">
            <div className="w-10 h-10 bg-star-background rounded-full flex justify-center items-center">
                <img
                    className="w-3.5 h-3.5"
                    src={starIcon}
                    alt="Orange Star Icon"
                />
            </div>
            <h1 className="text-white font-bold text-2xl">How did we do?</h1>
            <p className="text-body-text text-[0.9375rem]">
                {" "}
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
            </p>
            <div className="flex justify-between">
                <button
                    onClick={() => setNumRating(1)}
                    className={`button-style ${
                        numRating === 1
                            ? "bg-white text-[#1D2629]"
                            : "bg-star-background text-num-text"
                    }`}
                >
                    1
                </button>
                <button
                    onClick={() => setNumRating(2)}
                    className={`button-style ${
                        numRating === 2
                            ? "bg-white text-[#1D2629]"
                            : "bg-star-background text-num-text"
                    }`}
                >
                    2
                </button>
                <button
                    onClick={() => setNumRating(3)}
                    className={`button-style ${
                        numRating === 3
                            ? "bg-white text-[#1D2629]"
                            : "bg-star-background text-num-text"
                    }`}
                >
                    3
                </button>
                <button
                    onClick={() => setNumRating(4)}
                    className={`button-style ${
                        numRating === 4
                            ? "bg-white text-[#1D2629]"
                            : "bg-star-background text-num-text"
                    }`}
                >
                    4
                </button>
                <button
                    onClick={() => setNumRating(5)}
                    className={`button-style ${
                        numRating === 5
                            ? "bg-white text-[#1D2629]"
                            : "bg-star-background text-num-text"
                    }`}
                >
                    5
                </button>
            </div>
            <button
                onClick={() => {
                    if (numRating > 0) {
                        setIsSubmitted(true);
                    }
                }}
                className="bg-button-color hover:bg-white h-11 rounded-full font-bold tracking-[0.25rem] cursor-pointer"
                type="submit"
            >
                SUBMIT
            </button>
        </div>
    );
};

export default RatingCard;
