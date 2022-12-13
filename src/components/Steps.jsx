import { StepContext } from "./Context";
import bgMobile from "../images/bg-sidebar-mobile.svg";
import bgDesktop from "../images/bg-sidebar-desktop.svg";

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
                <div className="h-full relative flex justify-center lg:w-[50%] overflow-hidden lg:max-h-[36rem] lg:h-full">
                    <img src={bgMobile} className="relative w-full max-h-40 object-cover md:rounded-md lg:max-h-auto lg:hidden" alt="bg-sidebar" />
                    <img src={bgDesktop} className="hidden rounded-md lg:block w-full h-full relative top-0 left-0 object-center object-cover lg:relative lg:top-[-4rem]" alt="bg-sidebar" />
                    <ul className="flex flex-row justify-around py-6 absolute w-full z-10 max-w-md lg:flex lg:flex-col lg:gap-7 lg:max-w-none lg:px-8 lg:my-6">
                        {stepsText.map((step2, index) => {
                            return <li key={index} className="flex items-center gap-4">
                                <span className={`w-10 h-10 flex justify-center items-center border-2 font-[700] border-white rounded-[50%] text-white ${step === step2.index ? "bg-light-blue text-black border-light-blue" : ""}`}>{step2.index}</span>
                                <div className="hidden lg:block">
                                    <h4 className="text-white font-[400] text-sm">Step {step2.index}</h4>
                                    <p className="text-white font-[700]">{step2.name}</p>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            )}
        </StepContext.Consumer>
    );
}