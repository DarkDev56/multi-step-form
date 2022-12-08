import { StepContext } from "./Context";
import bg from "../images/bg-sidebar-mobile.svg";

const stepsText = [
    {index: 1, name: "Your info"},
    {index: 2, name: "Select plan"},
    {index: 3, name: "Add-ons"},
    {index: 4, name: "Summary"}
];

export default function Steps()
{
    return (
        <StepContext.Consumer>
            {({step, setStep}) => (
                <div className="h-full relative flex justify-center">
                    <img src={bg} className="absolute w-full max-h-40 object-cover" alt="bg-sidebar" />
                    <ul className="flex justify-around py-6 absolute w-full z-10 max-w-xs">
                        {stepsText.map((step2, index) => {
                            return <li key={index} className="flex items-center gap-4">
                                <span className={`w-10 h-10 flex justify-center items-center border-2 font-[700] border-white rounded-[50%] text-white ${step === step2.index ? "bg-light-blue text-black border-light-blue" : ""}`}>{step2.index}</span>
                                <div className="hidden">
                                    <h4>Step {step2.index}</h4>
                                    <p>{step2.name}</p>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            )}
        </StepContext.Consumer>
    );
}