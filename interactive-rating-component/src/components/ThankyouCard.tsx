import thankyouCardImg from "../assets/images/illustration-thank-you.svg";

type ThankyouCardProps = {
    numRating: number;
};

const ThankyouCard = ({ numRating }: ThankyouCardProps) => {
    return (
        <div className="max-w-[25.75rem] w-full p-[1.375rem] bg-card-background rounded-2xl flex flex-col items-center gap-6">
            <img
                className="w-40 h-28"
                src={thankyouCardImg}
                alt="Thank you card image"
            />
            <div className="bg-star-background rounded-full px-[1.125rem] flex justify-center items-center h-8">
                <p className="text-[#AF6741] text-[0.9375rem]">
                    You selected {numRating} out of 5
                </p>
            </div>
            <h1 className="text-white font-bold text-2xl text-center">
                Thank you!
            </h1>
            <p className="text-center text-body-text text-[0.9375rem]">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don&apos;t hesitate to get in touch!
            </p>
        </div>
    );
};

export default ThankyouCard;
