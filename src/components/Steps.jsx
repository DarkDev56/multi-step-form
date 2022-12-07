import { StepContext } from "./Context";

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
                <div>
                    <ul className="flex justify-around py-6">
                        {stepsText.map((step2, index) => {
                            return <li key={index} className="flex items-center gap-4">
                                <span className={`w-10 h-10 text-cool-gray flex justify-center items-center border-[1px] border-black rounded-[50%] text-black ${step === step2.index ? "bg-light-blue" : ""}`}>{step2.index}</span>
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