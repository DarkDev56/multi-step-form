import { StepContext } from "./Context";

export default function Switch()
{
    const nextBtnStyle = "bg-marine-blue py-2 px-3 text-white font-[500] rounded-md outline-none border-none text-md ml-auto focus-visible:bg-purplish-blue";
    return (
        <StepContext.Consumer>
            {({step, setStep}) => (
                <div className="flex justify-between fixed z-40 bottom-0 left-0 bg-white w-full p-5 md:relative md:pb-0 md:px-0">
                    <button
                        className={`${step === 1 && "hidden"} text-cool-gray font-[700] py-2 px-3 active:outline-black`}
                        onClick={() => setStep(step - 1)}
                    >Go Back</button>
                    {step !== 1 ?
                    <button
                        className={nextBtnStyle}
                        onClick={() => setStep(step + 1)}
                    >{step === 4 ? "Confirm" : "Next Step"}</button>
                    :
                    <button
                    className={nextBtnStyle}
                    type="submit"
                    form="input_form"
                >Next Step</button>}
            </div>
            )}
        </StepContext.Consumer>
    )
}