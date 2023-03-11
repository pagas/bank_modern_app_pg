import {quotes} from "../assets/index.js";
const FeedbackCard = ({content, name, title, img}) => (
    <div className="flex flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5
    feedback-card">
        <img src={quotes} alt="double_quotes" className="w-[42px] h-[27px] object-contain"/>
        <p className="flex-1 font-poppins font-normal text-[18px] leading-[32px] text-white my-10">{content}</p>
        <div className="flex flex-row">
            <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full mr-4"/>
            <div className="flex flex-col">
                <h4 className="font-poppins text-semibold text-[20px] leading-[32px] text-white">{name}</h4>
                <p className="font-poppins text-normal text-[16px] leading-[24px] text-dimWhite">{title}</p>
            </div>
        </div>
    </div>
);

export default FeedbackCard;
